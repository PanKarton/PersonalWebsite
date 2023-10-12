import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { useState } from 'react';
import { StyledList, StyledNav } from './Nav.styles';

type NavProps = {
  activeSection: string;
};

export const Nav = ({ activeSection }: NavProps) => {
  const [isActive, setisActive] = useState(false);

  const handleToggleNavMenu = () => setisActive(prev => !prev);

  return (
    <>
      <HamburgerButton isActive={isActive} onClick={handleToggleNavMenu} />
      <StyledNav className={isActive ? 'isActive' : ''}>
        <StyledList>
          <li>
            <NavLink href="#hello" isActive={activeSection === 'hello'}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink href="#about-me" isActive={activeSection === 'about-me'}>
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink href="#my-projects" isActive={activeSection === 'my-projects'}>
              MY PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink href="#contact-me" isActive={activeSection === 'contact-me'}>
              CONTACT ME
            </NavLink>
          </li>
        </StyledList>
      </StyledNav>
    </>
  );
};
