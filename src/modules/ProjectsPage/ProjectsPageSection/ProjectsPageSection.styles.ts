import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};

  padding-block: 7rem 4rem;
  padding-inline: 1rem;

  @media screen and (min-width: 30.25rem) {
    padding-top: 8rem;
  }

  @media screen and (min-width: 62.5rem) {
    display: grid;
    grid-template-columns: 45% 1fr;
    padding-top: 5rem;
    height: 100vh;
    overflow: hidden;
  }

  @media screen and (min-width: 75rem) {
    padding-top: 5.5rem;
  }

  * {
    font-weight: 500;
  }

  .project-list-wrapper {
    display: flex;
    justify-content: center;
    position: relative;

    @media screen and (min-width: 62.5rem) {
      max-width: 50rem;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3rem;
        background: ${({ theme }) => theme.color.primary};
        background: linear-gradient(
          180deg,
          ${({ theme }) => theme.color.primary} 0%,
          transparent 77%
        );
        z-index: 1;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 1.125rem;
        left: 0;
        right: 0;
        height: 3rem;
        background: ${({ theme }) => theme.color.primary};
        background: linear-gradient(0, ${({ theme }) => theme.color.primary} 0%, transparent 77%);
      }
    }
  }
`;

export const StyledVerticalLine = styled.span`
  display: block;
  position: relative;
  width: min(calc(100% - 2rem), 22rem);
  height: 0.0625rem;
  left: 50%;
  translate: -50% 0;
  margin-block: 2rem;

  background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};

  @media screen and (min-width: 62.5rem) {
    position: absolute;
    top: 13rem;
    left: 45%;
    translate: -50% 0;
    height: 75%;
    width: 0.0625rem;
    margin-block: 0;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 40ch;
  margin-inline: auto;
  padding-inline: 1rem;

  .flex-wrapper {
    display: flex;
    flex-direction: column;

    h2 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text4XL};
    }
    p {
      margin-top: 1.5rem;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      letter-spacing: 2px;
    }
    svg {
      width: 13rem;
    }
  }
  @media screen and (min-width: 62.5rem) {
    padding-top: 10%;
    .flex-wrapper {
      h2 {
        font-size: ${({ theme }) => theme.fontSize.text5XL};

        margin-bottom: 0.5rem;
      }
      p {
        max-width: 45ch;
        line-height: 150%;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.color.contrastDarker};
      }
    }
  }
`;
