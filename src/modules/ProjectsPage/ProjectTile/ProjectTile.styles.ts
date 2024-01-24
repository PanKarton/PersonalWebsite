import styled from 'styled-components';

export const StyledProjectTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 24rem;

  @media screen and (min-width: 62.5rem) {
    max-width: 32rem;
  }

  /* This prevents before pseudoelement from covering the content */
  h3,
  p,
  .tech-list-wrapper {
    position: relative;
  }

  h3 {
    color: ${({ theme }) => theme.color.accentPrimary};
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    margin-block: 0.5rem;
  }

  .miniature-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1.56;
    margin-bottom: 0.5rem;
    border: 0.75rem solid ${({ theme }) => theme.color.primarySlightlyLighter};
    transition: border-color 125ms ease-in-out;
  }

  &::before {
    position: absolute;
    content: '';
    inset: -2rem -1rem;
    background-color: ${({ theme }) => theme.color.primarySlightlyLighter};
    opacity: 0;
    transition: opacity 125ms ease-in-out;
    z-index: 0;
  }

  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1;
    }

    .miniature-wrapper {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.75rem;
  margin-top: 1rem;
`;

export const StyledTechTile = styled.div`
  border: 1px solid ${({ theme }) => theme.color.accentPrimary};
  border-radius: 999rem;
  padding: 0.375rem 0.75rem;
`;
