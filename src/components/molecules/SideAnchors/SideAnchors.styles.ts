import styled from 'styled-components';

export const StyledList = styled.ul`
  position: fixed;

  width: 3.5rem;
  left: 2rem;
  top: 50%;
  translate: 0 -50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 40px;

  li {
    height: 0.1875rem;
    background-color: ${({ theme }) => theme.color.contrast};
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      scale: 2 1;
      translate: 50% 0;
    }

    transition: all 250ms ease-in-out;
  }
`;

export const StyledAnchor = styled.a`
  display: block;
  height: 1rem;
  width: 2rem;
`;
