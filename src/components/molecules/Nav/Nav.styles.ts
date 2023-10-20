import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding-block: 2.5rem;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 2;

  @media screen and (min-width: 75rem) {
    display: block;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};

  gap: 5rem;
  background-color: transparent;
`;
