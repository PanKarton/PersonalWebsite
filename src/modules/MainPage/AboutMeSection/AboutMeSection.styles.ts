import styled from 'styled-components';

export const FlexWrapper = styled.div`
  /* border: 1px solid blue; */

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding-block: 3rem 5rem;
  @media screen and (min-width: 50rem) {
    justify-content: flex-start;
  }
`;
export const StyledTextWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  .paragraph {
    margin-top: 0.75rem;
    text-align: right;
  }
  a {
    margin-top: 1rem;
  }

  @media screen and (min-width: 37.5rem) {
    max-width: 25rem;
    align-items: flex-end;
  }

  @media screen and (min-width: 56.25rem) {
    gap: 0.75rem;
    max-width: max-content;
  }
`;

export const StyledImagesWrapper = styled.div`
  /* border: 1px solid red; */
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
