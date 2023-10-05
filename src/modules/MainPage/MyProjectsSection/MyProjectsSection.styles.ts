import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding-inline: clamp(1rem, 7vw, 3rem);

  @media screen and (min-width: 62.5rem) {
    flex-direction: row;
    justify-content: start;
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

  max-width: min-content;
`;

export const LastProjectWrapper = styled.div`
  display: none;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
  position: relative;
  padding: 0.75rem;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.color.primary};
    padding: 0.75rem;

    .project-description {
      color: white;
    }
  }

  .img-wrapper {
    position: relative;
    aspect-ratio: 1.68;
  }

  a {
    margin-top: 0.5rem;
    color: white;
  }

  /* .decoration-wrapper {
    position: absolute;
    width: 75%;
    aspect-ratio: 1;
    border: 1px solid red;

    top: -3rem;
    right: -3rem;
  } */

  @media screen and (min-width: 37.5rem) {
    display: block;
  }
`;
