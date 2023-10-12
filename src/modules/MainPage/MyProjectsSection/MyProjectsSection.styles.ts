import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  padding-inline: clamp(1rem, 7vw, 3rem);

  @media screen and (min-width: 62.5rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: clamp(2rem, 4vw, 10rem);
  }

  /*  */
  padding-top: 3rem;
  padding-bottom: 5rem;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & > div {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 75rem) {
    & > a {
      margin-top: 1rem;
    }
  }
  @media screen and (min-width: 87.5rem) {
    & > div {
      margin-top: 1rem;
    }
  }

  max-width: min-content;
`;

export const LastProjectWrapper = styled.div`
  flex-grow: 1;

  position: relative;
  max-width: 50rem;

  .content-wrapper {
    border: 1rem solid ${({ theme }) => theme.color.primarySlightlyLighter};
    background-color: ${({ theme }) => theme.color.primary};
    padding: 1rem;
    position: relative;
    z-index: 2;
    .img-wrapper {
      position: relative;
      aspect-ratio: 1.68;
      width: 100%;
    }

    .project-description {
      color: ${({ theme }) => theme.color.contrast};
      margin-top: 0.75rem;
    }

    a {
      display: block;
      color: ${({ theme }) => theme.color.accentPrimary};
      margin-top: 1rem;
    }
    @media screen and (min-width: 87.5rem) {
      .project-description {
        margin-top: 1.25rem;
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
      a {
        margin-top: 2rem;
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }

  .decoration-wrapper {
    position: absolute;
    aspect-ratio: 1;
    width: 100%;
    right: -3rem;
    top: -3rem;
    z-index: 1;

    @media screen and (min-width: 50rem) {
      width: 75%;
    }
    @media screen and (min-width: 62.5rem) {
      width: auto;
      height: 100%;
    }
    @media screen and (min-width: 87.5rem) {
      right: -5rem;
      top: -5rem;
    }
  }
`;
