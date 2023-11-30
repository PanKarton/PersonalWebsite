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
    color: ${({ theme }) => theme.color.contrast};
    font-size: 3rem;
    transition: color 125ms ease-in-out;
  }

  &.colorReversed {
    svg {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.accentPrimary};
  }
`;
