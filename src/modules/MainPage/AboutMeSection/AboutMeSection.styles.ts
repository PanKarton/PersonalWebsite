import styled from 'styled-components';

export const FlexWrapper = styled.div`
  /* border: 1px solid blue; */

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding-block: 5rem;
  @media screen and (min-width: 62.5rem) {
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
`;
export const StyledTextWrapper = styled.div`
  /* border: 1px solid red; */

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
  }

  @media screen and (min-width: 37.5rem) {
    width: 100%;
    align-items: flex-end;
  }

  @media screen and (min-width: 50rem) {
  }
  @media screen and (min-width: 56.25rem) {
    gap: 0.75rem;
    text-align: left;
    align-items: flex-start;
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
