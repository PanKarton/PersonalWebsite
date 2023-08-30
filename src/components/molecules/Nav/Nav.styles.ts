import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  translate: 100% 0;
  transition: translate ease-in-out 500ms;

  &.isActive {
    translate: 0 0;
  }

  @media screen and (min-width: 56.25rem) {
    translate: 0 0;
    padding-block: 3rem;
    height: auto;
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

  @media screen and (min-width: 56.25rem) {
    gap: 4rem;
    flex-direction: row;
    height: auto;
    background-color: transparent;
  }
`;
