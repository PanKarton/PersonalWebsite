import styled from 'styled-components';

export const FlexWrapper = styled.div`
  border: 1px solid blue;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: 3rem;
  @media screen and (min-width: 50rem) {
    justify-content: flex-start;
  }
`;
export const StyledTextWrapper = styled.div`
  border: 1px solid red;

  width: calc(100vw - 3rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  .paragraph {
    margin-top: 0.75rem;
  }
  a {
    margin-top: 1rem;
  }

  @media screen and (min-width: 37.5rem) {
    max-width: 25rem;
  }

  @media screen and (min-width: 56.25rem) {
    gap: 0.75rem;
    max-width: max-content;
  }
`;

export const StyledImagesWrapper = styled.div``;
