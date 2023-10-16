import { ForwardedRef, forwardRef } from 'react';
import { StyledAnchor, StyledList } from './SideAnchors.styles';

type SideAnchors = {
  activeSection: string;
};

export const SideAnchors = forwardRef(
  ({ activeSection }: SideAnchors, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <StyledList ref={ref} className="static">
        <li className={activeSection === 'hello' ? 'active' : ''}>
          <StyledAnchor href="#hello" />
        </li>
        <li className={activeSection === 'about-me' ? 'active' : ''}>
          <StyledAnchor href="#about-me" />
        </li>
        <li className={activeSection === 'my-projects' ? 'active' : ''}>
          <StyledAnchor href="#my-projects" />
        </li>
        <li className={activeSection === 'contact-me' ? 'active' : ''}>
          <StyledAnchor href="#contact-me" />
        </li>
      </StyledList>
    );
  }
);

SideAnchors.displayName = 'SideAnchors';
