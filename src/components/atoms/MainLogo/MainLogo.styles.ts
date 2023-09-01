import styled from 'styled-components';

export const StyledH1 = styled.h1`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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
`;
