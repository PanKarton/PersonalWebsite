import styled from 'styled-components';

export const StyledH1 = styled.h1`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  .logo-wrapper {
    position: relative;
    width: 2rem;
    aspect-ratio: 0.84;
  }

  span {
    color: ${({ theme }) => theme.color.contrastDarker};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    font-weight: 400;
  }

  @media screen and (min-width: 30.25rem) {
    top: 1.5rem;
    left: 2rem;
    .logo-wrapper {
      width: 2.5rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  @media screen and (min-width: 87.5rem) {
    top: 1.5rem;
    gap: 0.75rem;
    .logo-wrapper {
      width: 3rem;
    }
    span {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
    }
  }
`;
