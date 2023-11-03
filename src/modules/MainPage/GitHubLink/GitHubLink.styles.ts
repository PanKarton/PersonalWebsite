import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  right: clamp(2rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;
  z-index: 3;

  .icon-wrapper {
    position: absolute;
    top: -3rem;
    left: 50%;
    translate: -50% 0;
    aspect-ratio: 1;
    width: 2rem;
  }

  .vertical-line {
    border-radius: 1rem;
    height: 3rem;
    width: 0.25rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};
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
`;
