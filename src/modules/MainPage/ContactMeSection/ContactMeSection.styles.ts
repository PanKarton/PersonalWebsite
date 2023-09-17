import styled from 'styled-components';

export const FlexWrapper = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const StyledWrapper = styled.div`
  width: calc(100vw - 3rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    @media screen and (min-width: 87.5rem) {
      /* font-size: ${({ theme }) => theme.fontSize.text8XL}; */
    }
  }

  .paragraph {
    margin-top: 0.75rem;
    font-size: 1rem;
  }
`;

export const IconsWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  width: min(100%, 270px);
  .icon {
    position: relative;
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &.icon--envelope {
      width: 2.25rem;

      button {
        background-color: transparent;
        width: 100%;
        height: 100%;
        border: none;
      }
      svg {
        color: white;
        width: 100%;
        height: 100%;
      }

      @media screen and (min-width: 50rem) {
        display: none;
      }
    }
  }
`;
