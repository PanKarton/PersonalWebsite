import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  border-block: 1px solid wheat;
  .max-width-wrapper {
    position: relative;

    width: 100%;

    @media screen and (min-width: 26.25rem) {
      max-width: 26.25rem;
    }
    @media screen and (min-width: 50rem) {
      max-width: calc(100vw - 15rem);
    }
    @media screen and (min-width: 100rem) {
      max-width: 87.5rem;
    }
  }
`;
