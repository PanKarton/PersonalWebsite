import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  z-index: 2;

  @media screen and (min-width: 30.25rem) {
    height: 5rem;
  }

  @media screen and (min-width: 75rem) {
    display: none;
  }
`;
