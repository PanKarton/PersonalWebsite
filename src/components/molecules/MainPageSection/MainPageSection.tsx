import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { StyledSection } from './MainPageSection.styles';

type MainPageSectionProps = {
  children: ReactNode;
  id?: string;
  isWhite?: boolean;
};

export const MainPageSection = forwardRef(
  ({ children, id, isWhite }: MainPageSectionProps, ref: ForwardedRef<HTMLElement>) => (
    <StyledSection id={id} ref={ref} isWhite={isWhite}>
      <div className="max-width-wrapper">{children}</div>
    </StyledSection>
  )
);

MainPageSection.displayName = 'MainPageSection';
