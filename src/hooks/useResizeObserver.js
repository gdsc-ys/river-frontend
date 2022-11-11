import React, { useEffect } from 'react';
/**
 * Custom Hook for resize observer
 * @param {React.MutableRefObject} ref observe target. use useRef hook for selecting element.
 * @param {function} cb callback function of element observation.
 */
const useResizeObserver = (ref, cb) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ResizeObserver) {
      const observer = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          if (!(Array.isArray(entries) && entries.length)) {
            return;
          }

          cb(entries[0].contentRect);
        });
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);
};

export default useResizeObserver;
