import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  translate: 100% 0;
  /* transition: translate ease-in-out 500ms; */

  &.isActive {
    translate: 0 0;
  }

  @media screen and (min-width: 87.5rem) {
    translate: 0 0;
    padding-block: 2.5rem;
    height: auto;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  gap: 1rem;

  @media screen and (min-width: 87.5rem) {
    gap: 5rem;
    flex-direction: row;
    height: auto;
    background-color: transparent;
  }
`;
