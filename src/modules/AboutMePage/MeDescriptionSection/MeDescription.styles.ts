import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 4.75rem;
    left: 0;
    background-color: ${({ theme }) => theme.color.primary};
    width: clamp(1.25rem, 4vw, 2rem);
    height: 0.125rem;
    border-radius: 0.125rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: clamp(1rem, 7vw, 3rem);
  padding-bottom: clamp(4rem, 6vw, 7rem);

  @media screen and (min-width: 26.25rem) {
    max-width: 26.25rem;
  }
  @media screen and (min-width: 50rem) {
    max-width: calc(100vw - 15rem);
  }

  @media screen and (min-width: 110rem) {
    max-width: 93.75rem;
  }

  h2 {
    flex-shrink: 0;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.text3XL};
    margin-block: clamp(4rem, 6vw, 7rem);
  }

  h3 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.text2XL};
  }

  .flex-wrapper {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;

    @media screen and (min-width: 62.5rem) {
      flex-direction: row;
      gap: clamp(4rem, 5vw, 7rem);
    }
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1.33;
  width: min(100%, 30rem);
`;

export const Description = styled.p`
  max-width: 30rem;
`;
