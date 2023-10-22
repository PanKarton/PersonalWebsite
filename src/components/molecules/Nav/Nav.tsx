import { NavLink } from '@/components/atoms/NavLink/NavLink';
import { StyledList, StyledNav } from './Nav.styles';

type NavProps = {
  activeSection: string;
};

export const Nav = ({ activeSection }: NavProps) => {
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
      </StyledNav>
    </>
  );
};
