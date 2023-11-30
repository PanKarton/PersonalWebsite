import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: clamp(4.75rem, 7vw, 9rem);
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
  gap: 2rem;
  padding-inline: clamp(1rem, 7vw, 3rem);
  padding-block: clamp(4rem, 6vw, 7rem);

  @media screen and (min-width: 26.25rem) {
    max-width: 26.25rem;
  }
  @media screen and (min-width: 50rem) {
    max-width: calc(100vw - 15rem);
  }

  @media screen and (min-width: 110rem) {
    max-width: 93.75rem;
  }

  .heading-wrapper {
    h2 {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      @media screen and (min-width: 75rem) {
        font-size: ${({ theme }) => theme.fontSize.text4XL};
      }
      @media screen and (min-width: 75rem) {
        font-size: ${({ theme }) => theme.fontSize.text4XL};
      }
      @media screen and (min-width: 110rem) {
        font-size: ${({ theme }) => theme.fontSize.text5XL};
      }
    }
    p {
      margin-top: 0.5rem;
      @media screen and (min-width: 75rem) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }
`;

export const StyledSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-items: space-between;
  justify-content: center;
  gap: 1rem;

  li {
    flex-basis: calc(50% - 0.5rem);
    @media screen and (min-width: 50rem) {
      flex-basis: calc(33% - 0.6125rem);
    }
    @media screen and (min-width: 62.5rem) {
      flex-basis: calc(25% - 0.75rem);
    }
    @media screen and (min-width: 75rem) {
      flex-basis: calc(20% - 0.875rem);
    }
  }
`;
