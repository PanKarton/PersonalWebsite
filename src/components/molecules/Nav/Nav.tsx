import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledList, StyledNav } from './Nav.styles';

const StyledButton = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  color: white;
  font-size: 2rem;
  z-index: 9999;
`;

export const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleNavMenu = () => setIsVisible(prev => !prev);

  return (
    <>
      <StyledButton onClick={handleToggleNavMenu}>X</StyledButton>
      <StyledNav className={isVisible ? 'isActive' : ''}>
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
