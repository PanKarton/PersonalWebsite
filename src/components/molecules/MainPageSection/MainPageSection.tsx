import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { StyledSection } from './MainPageSection.styles';

type MainPageSectionProps = {
  children: ReactNode;
  id: string;
};

export const MainPageSection = forwardRef(
  ({ children, id }: MainPageSectionProps, ref: ForwardedRef<HTMLElement>) => (
    <StyledSection id={id} ref={ref}>
      <div className="max-width-wrapper">{children}</div>
    </StyledSection>
  )
);

MainPageSection.displayName = 'MainPageSection';
