import { createRoot } from 'react-dom/client';

/**
 * Map existing components to new components
 * @param {Record<string, JSX.Element>} map Component map
 */
export const mapper = (map) => {
  document.createElement = (function (func) {
    return function () {
      /**
       * @type {Element}
       */
      const element = func.apply(this, arguments);

      setTimeout(() => {
        Object.entries(map).map(([className, component]) => {
          if (element.classList.contains(className)) {
            createRoot(element).render(component);
          }
        });
      }, 0);

      return element;
    };
  })(document.createElement);
};
