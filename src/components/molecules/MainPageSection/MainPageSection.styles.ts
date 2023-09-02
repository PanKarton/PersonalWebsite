import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  .max-width-wrapper {
    position: relative;
    /* border-inline: 1px solid red; */

    width: 100%;

    @media screen and (min-width: 26.25rem) {
      max-width: 26.25rem;
    }
    @media screen and (min-width: 50rem) {
      max-width: calc(100vw - 15rem);
    }
    @media screen and (min-width: 87.5rem) {
      max-width: 87.5rem;
    }
  }
`;
