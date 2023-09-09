import styled from 'styled-components';
import Link from 'next/link';

export const FrameLink = styled(Link)`
  position: relative;
  border: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
  padding: 0.75rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
    translate: 0.25rem -0.25rem;
    transition: translate 250ms;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    translate: -0.25rem 0.25rem;
  }

  @media screen and (min-width: 25rem) {
    width: 14rem;
  }
`;
