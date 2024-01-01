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
    grid-template-columns: 45% 1fr;
    height: 100vh;
  }

  @media screen and (min-width: 75rem) {
    padding-top: 5.5rem;
  }

  * {
    font-weight: 500;
  }
`;

export const StyledVerticalLine = styled.span`
  display: block;
  position: relative;
  width: min(100%, 24rem);
  height: 0.0625rem;
  left: 50%;
  translate: -50% 0;
  margin-block: 2rem;

  background-color: ${({ theme }) => theme.color.accentPrimarySlightlyDarker};

  @media screen and (min-width: 62.5rem) {
    position: absolute;
    top: 25%;
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
      max-width: 40ch;
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
      }
    }
  }
`;
