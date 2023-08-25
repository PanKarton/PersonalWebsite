import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { StyledList, StyledNav } from './Nav.styles';

export const Nav = () => (
  <StyledNav>
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
);
