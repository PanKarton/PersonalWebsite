import { ReactNode } from 'react';
import { StyledSection } from './MainPageSection.styles';

type MainPageSectionProps = {
  children: ReactNode;
  id: string;
};

export const MainPageSection = ({ children, id }: MainPageSectionProps) => (
  <StyledSection id={id}>
    <div className="max-width-wrapper">{children}</div>
  </StyledSection>
);
