import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.accentPrimary};
  padding-block: 1.5rem;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};

  .max-width-wrapper {
    padding-inline: clamp(1rem, 7vw, 3rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 1rem;

    margin-inline: auto;
    text-align: center;

    .copyright-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media screen and (min-width: 62.5rem) {
        flex-direction: row;
      }
    }
    @media screen and (min-width: 26.25rem) {
      max-width: 26.25rem;
    }
    @media screen and (min-width: 50rem) {
      max-width: calc(100vw - 15rem);
      flex-direction: row;
      text-align: left;
    }
    @media screen and (min-width: 110rem) {
      max-width: 93.75rem;
    }
  }
`;

export const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  .icon {
    position: relative;
    aspect-ratio: 1;
    width: 2rem;

    a {
      display: block;
      width: 100%;
      height: 100%;

      &:focus {
        outline: none;
        border: 0.125rem solid ${({ theme }) => theme.color.accentPrimary};
        border-radius: 0.25rem;
      }
    }
    svg {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.color.accentPrimary};
    }
  }
`;
