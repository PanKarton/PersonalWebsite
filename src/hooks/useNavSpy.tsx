import { RefObject, useCallback, useEffect, useState } from 'react';

export const useNavSpy = (sectionsRefs: RefObject<HTMLElement>[]) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    // Set to the middle of the screen
    if (typeof window === 'undefined') return;
    setScrollPosition(window.scrollY + window.innerHeight / 2);

    const filteredSections = sectionsRefs.filter(
      (section): section is RefObject<HTMLElement> => section !== null && section.current !== null
    );

    filteredSections.forEach(section => {
      if (section === null || section.current === null) return;

      const offsetTop = section.current.offsetTop;
      const offsetBottom = offsetTop + section.current.offsetHeight;
      // Check if middle of the screen is withing section
      if (scrollPosition > offsetTop && scrollPosition < offsetBottom)
        setActiveSection(section.current.id);
    });
  }, [sectionsRefs, scrollPosition]);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, sectionsRefs, handleScroll]);

  return { activeSection };
};
