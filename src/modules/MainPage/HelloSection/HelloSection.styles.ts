import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 5vh, 3rem);
  padding-inline: 2rem;
  /* border: 1px solid red; */

  @media screen and (min-width: 30.25rem) {
    padding-inline: 0rem;
  }
  @media screen and (min-width: 50rem) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }

  @media screen and (min-width: 87.5rem) {
    margin-left: 2rem;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    &.big {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  @media screen and (min-width: 50rem) {
    max-width: 25rem;
  }

  @media screen and (min-width: 87.5rem) {
    p {
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      &.big {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
  }
`;

export const HeroImgWrapper = styled.div`
  position: relative;
  width: min(75vw, 25rem);
  aspect-ratio: 1.2;
  @media screen and (min-width: 50rem) {
    position: absolute;
    right: -6rem;
    top: 50%;
    translate: 0 -50%;
    width: 50vw;
  }
  @media screen and (min-width: 87.5rem) {
    /* display: none; */
    position: absolute;
    right: 5rem;
    top: 50%;
    translate: 0 -50%;
    width: min(40vw, 50vw);
  }
`;

export const DotSquareImageWrapper = styled.div`
  display: none;
  position: absolute;
  top: 3rem;
  right: 4rem;
  width: 11.75rem;
  aspect-ratio: 1;
  @media screen and (min-width: 87.5rem) {
    display: block;
  }
`;
