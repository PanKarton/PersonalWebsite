import styled from 'styled-components';

export const FlexWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: center;
  gap: 4rem;

  padding-block: 5rem;
  padding-inline: clamp(1rem, 7vw, 3rem);
  @media screen and (min-width: 62.5rem) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row-reverse;
  }
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  text-align: right;

  .paragraph {
    margin-top: 0.75rem;
  }
  a {
    margin-top: 1rem;
    translate: 0.25rem 0%;
  }

  @media screen and (min-width: 37.5rem) {
    width: 100%;
    align-items: flex-end;
  }

  @media screen and (min-width: 62.5rem) {
    gap: 0.75rem;
    text-align: left;
    align-items: flex-start;
  }
`;

export const StyledImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.95;

  .big-img-wrapper {
    position: absolute;
    aspect-ratio: 0.92;
    width: 90%;

    top: 0;
    right: 0;
  }
  .small-img-wrapper {
    position: absolute;
    aspect-ratio: 1;
    bottom: 0;
    left: 0;
    width: 45%;
  }
  @media screen and (max-width: 37.5rem) {
    display: none;
  }
`;
