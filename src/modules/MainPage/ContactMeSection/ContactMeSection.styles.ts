import styled from 'styled-components';

export const FlexWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .form-wrapper {
    border: 1px solid red;
    height: 50vh;

    position: absolute;
    inset: 0;
    translate: 100% 0;
  }

  @media screen and (min-width: 50rem) {
    padding-top: 30vh;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;

    .form-wrapper {
      position: static;
      translate: 0 0;
      flex-grow: 1;
    }
  }
`;

export const StyledWrapper = styled.div`
  width: calc(100vw - 3rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    @media screen and (min-width: 87.5rem) {
      font-size: ${({ theme }) => theme.fontSize.text8XL};
    }
  }

  .paragraph {
    margin-top: 0.75rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 37.5rem) {
    max-width: 18rem;
  }

  @media screen and (min-width: 67.8125rem) {
    gap: 0.75rem;
    max-width: fit-content;
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

    &.icon--envelope {
      width: 2.25rem;
      margin-left: auto;
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
