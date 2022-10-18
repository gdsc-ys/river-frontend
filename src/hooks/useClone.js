import { useCallback, useEffect } from 'react';
import { removeProtocol } from '@utils/converter';
import { run } from '@utils/runner';

/**
 * Apply target's document styles and scripts
 * @param {string} target URL of a target site
 */
const useClone = (target) => {
  const currentHost = window.location.host;
  const targetHost = removeProtocol(target);

  const cloneSite = useCallback(
    async (target) => {
      try {
        const response = await fetch(target, { method: 'GET' });
        const raw = await response.text();

        const parser = new DOMParser();
        const targetDocument = parser.parseFromString(raw, 'text/html');

        // Append styles
        targetDocument
          .querySelectorAll('link[rel="stylesheet"]')
          .forEach((link) => {
            link.href = link.href.replace(currentHost, targetHost);

            document.head.appendChild(link);
          });

        // Append scripts
        Array.from(targetDocument.scripts).forEach((script) => {
          const url = script.src.replace(currentHost, targetHost);

          run(url);
        });
      } catch (error) {
        console.error(error);
      }
    },
    [currentHost, targetHost],
  );

  useEffect(() => {
    cloneSite(target);
  }, [cloneSite, target]);
};

export default useClone;
