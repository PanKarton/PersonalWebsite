import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  right: clamp(2rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 3;

  .icon-wrapper {
    aspect-ratio: 1;
    width: 2rem;
    display: grid;
    place-items: center;
    svg {
      font-size: 2.25rem;
      color: ${({ theme }) => theme.color.accentPrimary};
      transition: color 250ms ease-in-out;
    }
  }

  .vertical-line {
    border-radius: 1rem;
    height: 3rem;
    width: 0.25rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};
    transition: background-color 250ms ease-in-out;
  }

  @media screen and (min-width: 37.5rem) {
    .icon-wrapper {
      width: 2.25rem;
      top: -3.25rem;
    }
    .vertical-line {
      height: clamp(6rem, 15vw, 10rem);
      width: 0.25rem;
    }
  }

  &.isColorReversed {
    .vertical-line {
      background-color: ${({ theme }) => theme.color.primary};
    }
    svg {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
