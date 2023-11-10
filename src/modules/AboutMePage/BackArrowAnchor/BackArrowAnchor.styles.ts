import styled from 'styled-components';

export const StyledAnchor = styled.a`
  position: fixed;
  left: 1.5rem;
  top: 5.5rem;
  transition: translate 250ms ease-in-out;

  &:hover {
    translate: -0.5rem 0;
  }

  svg {
    color: white;
    font-size: 3rem;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.accentPrimary};
  }
`;
