import { RefObject, useEffect, useState } from 'react';

export const useReverseColor = (ref: RefObject<HTMLElement>) => {
  const [isArrowColorReversed, setIsArrowColorReversed] = useState(false);
  const [isLogoColorReversed, setIsLogoColorReversed] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;

    const handleScroll = () => {
      const sectionTop = ref.current?.offsetTop;
      if (!sectionTop) return;
      // Set true if arrow is between sections
      setIsArrowColorReversed(window.scrollY + 112 > sectionTop);
      // Set true if logo is between sections
      setIsLogoColorReversed(window.scrollY + 40 > sectionTop);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return {
    isArrowColorReversed,
    isLogoColorReversed,
  };
};
