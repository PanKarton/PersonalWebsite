import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { StyledList, StyledNav } from './Nav.styles';

type NavProps = {
  activeSection: string;
};

export const Nav = ({ activeSection }: NavProps) => {
  return (
    <>
      <StyledNav>
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
