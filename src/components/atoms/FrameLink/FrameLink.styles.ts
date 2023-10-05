import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};
  text-align: center;
  padding-block: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.textBase};
    transition: all 250ms ease-in-out;
  }

  .line {
    display: block;
    width: 1rem;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};
    transition: all 250ms ease-in-out;
  }

  .arrow-body {
    display: block;
    width: 1rem;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};

    transition: all 250ms ease-in-out;

    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      translate: 0 -50%;
      scale: 0 1;

      background-color: ${({ theme }) => theme.color.accentPrimary};
      height: 0.125rem;
      width: 0.5rem;

      transition: all 250ms ease-in-out;
    }

    &::before {
      transform-origin: right center;
      rotate: 45deg;
    }
    &::after {
      transform-origin: right center;
      rotate: -45deg;
    }
  }

  &:hover,
  &:focus {
    padding-right: 0.5rem;
    p {
      translate: -1rem 0;
    }

    .line {
      scale: 0 1;
      translate: -1rem 0;
    }

    .arrow-body {
      translate: -0.375rem 0;
      scale: 1.5 1;

      &::before,
      &::after {
        scale: 1 1;
      }
    }
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.accentPrimary};
  }
`;
