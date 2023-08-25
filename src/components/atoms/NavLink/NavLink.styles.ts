import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.text2XL};
  color: ${({ theme }) => theme.color.contrastDarker};

  &.active {
    color: ${({ theme }) => theme.color.accentPrimary};
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.contrastDarkerHover};
  }
`;
