import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';

/**
 * Map existing components to new components
 * @param {Record<string, JSX.Element>} map Component map
 */
export const mapper = (map) => {
  const appendChild = Element.prototype.appendChild;

  const targets = Object.keys(map);
  const virtualRoot = document.createElement('div');

  /**
   * @param {Element} element
   */
  Element.prototype.appendChild = function (element) {
    const [matchedTarget] = targets.filter((target) =>
      element.classList?.contains(target),
    );

    if (matchedTarget) {
      const component = createPortal(map[matchedTarget], this);
      createRoot(virtualRoot).render(component);

      return null;
    }

    return appendChild.apply(this, arguments);
  };
};
