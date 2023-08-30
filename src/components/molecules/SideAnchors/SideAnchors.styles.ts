import styled from 'styled-components';

export const StyledList = styled.ul`
  position: fixed;

  height: 3.5rem;

  left: 50%;
  bottom: 0;
  translate: -50% 0;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  column-gap: 40px;

  li {
    width: 0.1875rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.color.contrast};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.125rem;
    &.active {
      scale: 1 2;
      translate: 0 -50%;
    }

    transition: all 250ms ease-in-out;
  }
`;

export const StyledAnchor = styled.a`
  display: block;
  height: 2rem;
  width: 1rem;
`;
