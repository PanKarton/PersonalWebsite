import styled from 'styled-components';

export const StyledH1 = styled.h1`
  position: fixed;
  top: 0.8125rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;

  .logo-wrapper {
    display: flex;
    align-items: center;
    width: 2rem;
    aspect-ratio: 0.84;

    svg {
      max-height: 100%;
      max-width: 100%;
    }
  }

  span {
    color: ${({ theme }) => theme.color.contrastDarker};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 400;
  }

  @media screen and (min-width: 30.25rem) {
    top: 1.25rem;
    left: 1.5rem;
    span {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  @media screen and (min-width: 75rem) {
    top: 1.5625rem;
    left: 1.5rem;
  }

  @media screen and (min-width: 87.5rem) {
    left: 2rem;
  }
`;
