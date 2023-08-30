import { StyledAnchor, StyledList } from './SideAnchors.styles';

type SideAnchors = {
  activeSection: string;
};

export const SideAnchors = ({ activeSection }: SideAnchors) => {
  return (
    <StyledList>
      <li className={activeSection === '#hello' ? 'active' : ''}>
        <StyledAnchor href="#hello" />
      </li>
      <li className={activeSection === '#about-me' ? 'active' : ''}>
        <StyledAnchor href="#about-me" />
      </li>
      <li className={activeSection === '#skills' ? 'active' : ''}>
        <StyledAnchor href="#skills" />
      </li>
      <li className={activeSection === '#my-projects' ? 'active' : ''}>
        <StyledAnchor href="#my-projects" />
      </li>
      <li className={activeSection === '#contact-me' ? 'active' : ''}>
        <StyledAnchor href="#contact-me" />
      </li>
    </StyledList>
  );
};
