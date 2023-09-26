import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  .max-width-wrapper {
    /* border-inline: 1px solid wheat; */
    position: relative;

    width: 100%;

    @media screen and (min-width: 26.25rem) {
      max-width: 26.25rem;
    }
    @media screen and (min-width: 50rem) {
      max-width: calc(100vw - 15rem);
    }
    @media screen and (min-width: 110rem) {
      max-width: 93.75rem;
    }
  }
`;
