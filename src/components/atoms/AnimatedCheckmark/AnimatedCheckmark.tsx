import styled from 'styled-components';

export const AnimatedCheckmark = () => (
  <StyledSVG version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
    <polyline
      className="path check"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeMiterlimit="10"
      points="100.2,40.2 51.5,88.8 29.8,67.5 "
    />
  </StyledSVG>
);

export const StyledSVG = styled.svg`
  width: 40px;
  display: block;
  margin-inline: auto;
  stroke: ${({ theme }) => theme.color.accentPrimary};

  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    &.check {
      stroke-dashoffset: -100;
      -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
      animation: dash-check 0.9s 0.35s ease-in-out forwards;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
`;
