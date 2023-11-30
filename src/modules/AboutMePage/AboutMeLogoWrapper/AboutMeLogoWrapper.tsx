import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import { StyledBackground, StyledWrapper } from './AboutMeLogoWrapper.styles';

export const AboutMeLogoWrapper = () => (
  <StyledWrapper>
    <a href="/#about-me">
      <MainLogo />
    </a>
    <span className="sub-page">/ about-me</span>
    <StyledBackground />
  </StyledWrapper>
);
