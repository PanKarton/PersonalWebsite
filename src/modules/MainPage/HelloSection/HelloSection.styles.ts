import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-block: 5rem;
  padding-inline: clamp(1.5rem, 7vw, 3rem);
  min-height: 100dvh;

  display: flex;
  align-items: center;
`;

export const HeroWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: 50rem) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 69rem) {
    justify-content: space-between;
  }

  /* Portrait */
  @media screen and (orientation: portrait) and (min-height: 81.25remomm) {
    flex-direction: column;
    gap: clamp(4rem, 5vh, 8rem);
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: ${({ theme }) => theme.color.contrast};
    &.big {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      margin-top: 0.5rem;
      @media screen and (min-width: 69rem) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }

  @media screen and (min-width: 50rem) {
    max-width: 16rem;
  }
  @media screen and (min-width: 75.5rem) {
    max-width: 25rem;
  }

  @media screen and (min-width: 112.5rem) {
    p {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      &.big {
        margin-top: 1.25rem;
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }

  /* Portrait */
  @media screen and (orientation: portrait) and (min-height: 81.25rem) {
    max-width: 25rem;
    p {
      font-size: ${({ theme }) => theme.fontSize.textLG};
      &.big {
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }
`;

export const HeroHeading = styled.h2`
  color: ${({ theme }) => theme.color.accentPrimary};
  font-weight: 400;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.text4XL};
  @media screen and (min-width: 50rem) {
    font-size: ${({ theme }) => theme.fontSize.text5XL};
  }
  @media screen and (min-width: 69rem) {
    font-size: ${({ theme }) => theme.fontSize.text6XL};
  }
  @media screen and (min-width: 75.5rem) {
    font-size: ${({ theme }) => theme.fontSize.text7XL};
  }
  @media screen and (min-width: 112.5rem) {
    font-size: ${({ theme }) => theme.fontSize.text8XL};
  }

  /* Portrait */
  @media screen and (orientation: portrait) and (min-height: 81.25remomm) {
    font-size: ${({ theme }) => theme.fontSize.text6XL};
  }
`;

export const HeroImgWrapper = styled.div`
  aspect-ratio: 1.2;

  div {
    position: relative;
    height: 100%;
    @media screen and (min-width: 50rem) {
      position: absolute;
      top: 50%;
      translate: 0 -50%;
      height: auto;
      width: min(130%, 29rem);
      aspect-ratio: 1.2;
    }
    @media screen and (min-width: 65rem) {
      position: relative;
      margin-left: auto;
      width: 100%;
    }
  }
  @media screen and (min-width: 50rem) {
    position: relative;
    flex-grow: 1;
  }
  @media screen and (min-width: 69rem) {
    max-width: 29rem;
  }
  @media screen and (min-width: 87.5rem) {
    margin-inline: auto;
    max-width: clamp(29rem, 32vw, 35rem);
  }
  @media screen and (min-width: 112.5rem) {
    margin-left: 0;
    margin-right: 10rem;
  }

  /* Portrait */
  @media screen and (orientation: portrait) and (min-height: 81.25rem) {
    width: 100%;
    div {
      position: relative;
      top: 0;
      translate: 0 0;
      width: 100%;
    }
  }
`;

export const DotSquareImageWrapper = styled.div`
  display: none;
  position: absolute;
  top: 3rem;
  right: 4rem;
  width: 11.75rem;
  aspect-ratio: 1;
  z-index: 1;
  @media screen and (min-width: 87.5rem) {
    display: block;
  }
`;
