import { useCallback, useEffect, useState } from 'react';

export const useNavSpy = () => {
  const [activeSection, setActiveSection] = useState('hello');
  const [scrollPosition, setScrollPosition] = useState(window.scrollY + window.innerHeight / 2);

  const handleScroll = useCallback(() => {
    const sectionsIds = ['hello', 'about-me', 'my-projects', 'contact-me'];
    const sections = sectionsIds.map(id => document.getElementById(id));

    // Set to the middle of the screen
    setScrollPosition(window.scrollY + window.innerHeight / 2);

    const filteredSections = sections.filter(
      (section): section is HTMLElement => typeof section === 'object'
    );

    filteredSections.forEach((section, i) => {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;
      // Check if middle of the screen is withing section
      if (scrollPosition > offsetTop && scrollPosition < offsetBottom)
        setActiveSection(sectionsIds[i]);
    });
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { activeSection };
};
