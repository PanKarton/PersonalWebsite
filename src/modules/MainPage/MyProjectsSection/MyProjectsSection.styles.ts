import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding-inline: clamp(1rem, 7vw, 3rem);

  @media screen and (min-width: 62.5rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: clamp(2rem, 4vw, 10rem);
  }

  /*  */
  padding-top: 3rem;
  padding-bottom: 10rem;
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
  display: none;
  flex-grow: 1;

  position: relative;
  max-width: 50rem;
  background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
  padding: 1.25rem;

  .content-wrapper {
    background-color: ${({ theme }) => theme.color.primary};
    padding: 1rem;
    .img-wrapper {
      position: relative;
      aspect-ratio: 1.68;
      width: 100%;
    }

    .project-description {
      color: ${({ theme }) => theme.color.contrast};
      margin-top: 1rem;
      @media screen and (min-width: 87.5rem) {
        margin-top: 1.25rem;
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }

    a {
      display: block;
      color: ${({ theme }) => theme.color.accentPrimary};
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 37.5rem) {
    display: block;
  }
`;
