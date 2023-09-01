import { HamburgerButton } from '@/components/atoms/HamburgerButton/HamburgerButton';
import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { useState } from 'react';
import { StyledList, StyledNav } from './Nav.styles';

export const Nav = () => {
  const [isActive, setisActive] = useState(false);
  console.log(isActive);

  const handleToggleNavMenu = () => setisActive(prev => !prev);

  return (
    <>
      <HamburgerButton isActive={isActive} onClick={handleToggleNavMenu} />
      <StyledNav className={isActive ? 'isActive' : ''}>
        <StyledList>
          <li>
            <NavLink href="#hello" isActive={true}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink href="#about-me" isActive={false}>
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink href="#skills" isActive={false}>
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink href="#my-projects" isActive={false}>
              MY PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink href="#contact-me" isActive={false}>
              CONTACT ME
            </NavLink>
          </li>
        </StyledList>
      </StyledNav>
    </>
  );
};
