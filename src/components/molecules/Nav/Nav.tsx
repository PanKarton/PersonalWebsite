import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BottomBorder, StyledList, StyledNav } from './Nav.styles';

type NavProps = {
  activeSection: string;
};

const bottomBorderVariants = {
  hidden: {
    width: 0,
    x: '50vw',
  },
  visible: {
    width: '200%',
    x: '-50vw',
  },
  exit: {
    width: 0,
    x: '50vw',
  },
};

export const Nav = ({ activeSection }: NavProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const sections = [
    {
      name: 'hello',
      text: 'Home',
    },
    {
      name: 'about-me',
      text: 'About me',
    },
    {
      name: 'my-projects',
      text: 'My projects',
    },
    {
      name: 'contact-me',
      text: 'Contact me',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', () => setScrollPosition(window.scrollY));

    return () => {
      window.removeEventListener('scroll', () => setScrollPosition(window.scrollY));
    };
  }, [scrollPosition]);

  return (
    <>
      <StyledNav>
        <StyledList>
          {sections.map((section, index) => (
            <li key={index}>
              <NavLink href={`#${section.name}`} isActive={activeSection === section.name}>
                {section.text}
              </NavLink>
            </li>
          ))}
        </StyledList>
        <AnimatePresence mode="wait">
          {scrollPosition > 160 && (
            <BottomBorder
              variants={bottomBorderVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </StyledNav>
    </>
  );
};
