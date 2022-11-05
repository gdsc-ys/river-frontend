import { useEffect, useRef, useState } from 'react';

/**
 * @param {Boolean} init initial state whether the component is visible or not.
 * @returns {ref, isVisible, setIsVisible}
 * ref : reference node, clicking outside of referenced node triggers handler
 * isVisible : state whether element is visible.
 * setIsVisible : Dispatcher that changes visibility state.
 */
const useComponentVisible = (init) => {
  const [isVisible, setIsVisible] = useState(init);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  const handleEscHide = (event) => {
    if (event.key === 'Escape') {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscHide, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscHide, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export default useComponentVisible;
