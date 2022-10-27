import { useEffect, useRef, useState } from 'react';

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
