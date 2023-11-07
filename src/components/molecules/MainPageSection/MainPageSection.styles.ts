import styled from 'styled-components';

type StyledSectionProps = {
  isWhite?: boolean;
};

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${({ theme, isWhite }) =>
    isWhite ? theme.color.contrast : theme.color.primary};
  display: flex;
  justify-content: center;
  .max-width-wrapper {
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
