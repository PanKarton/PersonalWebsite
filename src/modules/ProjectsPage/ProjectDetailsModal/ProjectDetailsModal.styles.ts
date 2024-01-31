import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: 99999;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  @media screen and (min-width: 62.5rem) {
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.color.primaryTransparent};
  }

  @media screen and (min-width: 75rem) {
    margin-top: 5.5rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-block: 3rem;
    padding-inline: 2rem;
    width: min(38rem, 100%);

    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.contrastDarker};
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
      height: 30vh;

      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLighter};
      }
    }

    @media screen and (min-width: 32.5rem) {
      padding-inline: 4rem;
    }

    @media screen and (min-width: 62.5rem) {
      width: min(60vw, 45rem);
      border-left: 2px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
      /* padding-block: 5.25rem; */
      padding-inline: 7rem;
    }

    h4 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text5XL};
      font-weight: 500;
      text-align: center;
      margin-bottom: 1rem;
    }

    h5 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      font-weight: 500;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .miniature-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1.56;
      margin-bottom: 3rem;
      flex-shrink: 0;

      &::after {
        position: absolute;
        content: '';
        top: 1rem;
        right: -1rem;
        height: 100%;
        border-left: 3px solid ${({ theme }) => theme.color.accentPrimary};
      }
      &::before {
        position: absolute;
        content: '';
        bottom: -1rem;
        right: -1rem;
        width: 100%;
        border-bottom: 3px solid ${({ theme }) => theme.color.accentPrimary};
      }
    }

    .description-wrapper {
      margin-bottom: 3rem;
      p ~ p {
        margin-top: 1rem;
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.textBase};
        letter-spacing: 1px;
        line-height: 2;
        text-align: justify;
      }
    }
  }
`;

export const StyledLineDivier = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  margin-bottom: 2rem;
`;

export const StyledLinksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 1.25rem;

  a {
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    p {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }

    &:first-child {
      left: 0;
      right: auto;
      @media screen and (min-width: 62.5rem) {
        left: auto;
        right: 10rem;
      }
    }
  }
`;

export const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
`;

export const StyledTechTile = styled.div`
  border: 1px solid ${({ theme }) => theme.color.accentPrimary};
  border-radius: 999rem;
  padding: 0.375rem 0.75rem;
  transition: background-color 125ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  }
`;

export const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  translate: 0 -100%;
  font-size: 3.75rem;
  color: ${({ theme }) => theme.color.contrast};

  @media screen and (min-width: 30.25rem) {
    top: 0.75rem;
  }
  @media screen and (min-width: 45rem) {
    top: 1rem;
    right: 2rem;
    translate: 0 0;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.accentPrimary};
  }
`;
