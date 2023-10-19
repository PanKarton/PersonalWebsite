import styled from 'styled-components';

type StyledBurgerProps = {
  isactive: boolean;
};

export const StyledBurger = styled.button<StyledBurgerProps>`
  position: fixed;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  @media screen and (min-width: 30.25rem) {
    top: 1.75rem;
    right: 2rem;
  }

  @media screen and (min-width: 87.5rem) {
    display: none;
  }

  span {
    display: block;
    width: 2rem;
    height: 0.125rem;
    background: ${({ theme }) => theme.color.contrast};
    border-radius: 0.625rem;
    position: relative;
    transition: translate 125ms linear ${({ isactive }) => (isactive ? '' : '200ms')};

    &.mid-line::after,
    &.mid-line::before {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      translate: 0 -50%;
      width: 1rem;
      height: 0.125rem;
      border-radius: 0.625rem;
      background: ${({ theme }) => theme.color.contrast};
      transform-origin: right center;
      transition: rotate 125ms linear ${({ isactive }) => (isactive ? '200ms' : '')};
    }
  }

  &.active {
    .mid-line::after {
      rotate: 47deg;
    }
    .mid-line::before {
      rotate: -47deg;
    }
    span:first-child {
      translate: 0 0.6875rem;
    }

    span:nth-child(3) {
      translate: 0 -0.6875rem;
    }
  }
`;
