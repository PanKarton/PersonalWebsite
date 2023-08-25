import { ReactNode } from 'react';
import { StyledSection } from './MainPageSection.styles';

export const MainPageSection = ({ children, id }: { children: ReactNode; id: string }) => (
  <StyledSection id={id}>{children}</StyledSection>
);
