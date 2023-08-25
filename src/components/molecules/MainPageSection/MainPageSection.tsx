import { ReactNode } from 'react';
import { StyledSection } from './MainPageSection.styles';

export const MainPageSection = ({ children }: { children: ReactNode }) => (
  <StyledSection>{children}</StyledSection>
);
