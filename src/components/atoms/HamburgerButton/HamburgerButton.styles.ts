import styled from 'styled-components';

export const StyledBurger = styled.button`
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
  z-index: 4;

  @media screen and (min-width: 30.25rem) {
    top: 1.75rem;
    right: 2rem;
  }

  @media screen and (min-width: 87.5rem) {
    display: none;
    z-index: 10;
  }

  span {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.contrast};
    border-radius: 0.625rem;
    position: relative;
    transform-origin: 0.0625rem;
    transition: all 0.125s linear;

    :nth-child(2) {
      opacity: 1;
      scale: 1 1;
    }
  }

  &.active {
    span:first-child {
      rotate: 47deg;
    }

    span:nth-child(2) {
      opacity: 0;
      translate: 25% 0;
      scale: 0 1;
    }

    span:nth-child(3) {
      rotate: -47deg;
    }
  }
`;
