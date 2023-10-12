'use client';
import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { Nav } from '@/components/molecules/Nav/Nav';
import { SideAnchors } from '@/components/molecules/SideAnchors/SideAnchors';
import { GitHubLink } from '@/modules/MainPage/GitHubLink/GitHubLink';
import { MainPageSectionsWrapper } from '@/modules/MainPage/MainPageSectionsWrapper/MainPageSectionsWrapper';
import { useEffect, useState } from 'react';

const Page = () => {
  const [activeSection, setActiveSection] = useState('hello');

  useEffect(() => {
    const sectionsIds = ['hello', 'about-me', 'my-projects', 'contact-me'];
    const sections = sectionsIds.map(id => document.getElementById(id));

    const handleScroll = () => {
      const scrollPositionVerticalCenter = window.scrollY + window.innerHeight / 2;

      const filteredSections = sections.filter(
        (section): section is HTMLElement => typeof section === 'object'
      );

      filteredSections.forEach((section, i) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        // Check if middle of the screen is withing section
        if (scrollPositionVerticalCenter > offsetTop && scrollPositionVerticalCenter < offsetBottom)
          setActiveSection(sectionsIds[i]);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <MainPageSectionsWrapper />
      <SideAnchors activeSection={activeSection} />
      <Nav activeSection={activeSection} />
      <MainLogo />
      <GitHubLink />
    </div>
  );
};

export default Page;
