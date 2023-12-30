import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { StyledBackground, StyledWrapper } from './SubPageLogoWrapper.styles';

type SubPageLogoWrapper = {
  subPage: 'about-me' | 'projects';
};

export const SubPageLogoWrapper = ({ subPage }: SubPageLogoWrapper) => (
  <StyledWrapper>
    <a href={`/${subPage}`}>
      <MainLogo />
    </a>
    <span className="sub-page">{`/ ${subPage}`}</span>
    <StyledBackground />
  </StyledWrapper>
);
