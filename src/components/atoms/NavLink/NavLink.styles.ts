import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.text2XL};
  color: ${({ theme }) => theme.color.primaryLighter};

  &.active {
    color: ${({ theme }) => theme.color.accentPrimary};
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.contrastDarkerHover};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.accentPrimary};
    outline-offset: 0.5rem;
  }
`;
