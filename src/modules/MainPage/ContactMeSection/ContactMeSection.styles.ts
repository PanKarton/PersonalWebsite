import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding-bottom: 7rem;
  padding-inline: clamp(1rem, 7vw, 3rem);

  h2 {
    translate: -0.25rem 0;
  }

  @media screen and (min-width: 37.5rem) {
    gap: 4rem;
    justify-content: space-between;
  }

  @media screen and (min-width: 62.5rem) {
    flex-direction: row;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.contrast};
  max-width: 26rem;

  margin-top: 0.5rem;

  @media screen and (min-width: 87.5rem) {
    font-size: ${({ theme }) => theme.fontSize.textLG};
  }
`;

export const IconsWrapper = styled.div`
  margin-top: 0.25rem;
  display: flex;
  gap: 1rem;
  width: min(100%, 270px);
  .icon {
    position: relative;
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;
