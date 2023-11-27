import { MainLogo } from '@/components/atoms/MainLogo/MainLogo';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 4rem;
  background: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};

  span.sub-page {
    position: absolute;
    top: 50%;
    left: 13rem;
    translate: 0 -50%;
    color: ${({ theme }) => theme.color.contrastDarker};
    font-size: 14px;
  }

  @media screen and (min-width: 30.25rem) {
    height: 5rem;
    span.sub-page {
      left: 14rem;
    }
  }
  @media screen and (min-width: 75rem) {
    height: 5.5rem;
  }
`;

export const AboutMeLogoWrapper = () => (
  <StyledWrapper>
    <a href="/#about-me">
      <MainLogo />
    </a>
    <span className="sub-page">/ about-me</span>
    <StyledBackground></StyledBackground>
  </StyledWrapper>
);
