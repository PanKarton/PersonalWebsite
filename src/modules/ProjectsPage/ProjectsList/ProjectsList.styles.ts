import styled from 'styled-components';

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 62.5rem) {
    overflow-y: auto;
    height: calc(100vh - 5rem - 5.125rem);
    padding-top: 7.5rem;
    padding-inline: 2rem;

    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
      height: 30vh;

      border-top: 7.5rem solid ${({ theme }) => theme.color.primary};
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.color.primaryLighter};
      }
    }
  }
`;
