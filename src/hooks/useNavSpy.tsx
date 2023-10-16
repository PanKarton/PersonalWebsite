import { RefObject, useCallback, useEffect, useState } from 'react';

export const useNavSpy = (sectionsRefs: RefObject<HTMLElement>[]) => {
  const [activeSection, setActiveSection] = useState('hello');
  const [scrollPosition, setScrollPosition] = useState(window.scrollY + window.innerHeight / 2);

  const handleScroll = useCallback(() => {
    // Set to the middle of the screen
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { activeSection };
};
