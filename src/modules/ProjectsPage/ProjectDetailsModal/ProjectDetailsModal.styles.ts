import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrastDarker};
  overflow-y: scroll;

  border-left: 2px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  z-index: 99999;

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-block: 5.25rem;
    padding-inline: 7rem;

    h4 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text5XL};
      font-weight: 500;
      text-align: center;
      margin-bottom: 1rem;
    }

    h5 {
      color: ${({ theme }) => theme.color.accentPrimary};
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      font-weight: 500;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .miniature-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1.56;
      margin-bottom: 2rem;

      &::after {
        position: absolute;
        content: '';
        top: 1rem;
        right: -1rem;
        height: 100%;
        border-left: 3px solid ${({ theme }) => theme.color.accentPrimary};
      }
      &::before {
        position: absolute;
        content: '';
        bottom: -1rem;
        right: -1rem;
        width: 100%;
        border-bottom: 3px solid ${({ theme }) => theme.color.accentPrimary};
      }
    }

    .description-wrapper {
      margin-bottom: 3rem;
      p ~ p {
        margin-top: 1rem;
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.textBase};
        letter-spacing: 1px;
        line-height: 2;
        text-align: justify;
      }
    }
  }
`;

export const StyledLineDivier = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.accentPrimarySlightlyDarker};
  margin-bottom: 2rem;
`;

export const StyledLinksWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.75rem;

  a {
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    p {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }

    &:first-child {
      right: 40%;
      translate: 50% -50%;
    }
  }
`;

export const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 1rem;
`;

export const StyledTechTile = styled.div`
  border: 1px solid ${({ theme }) => theme.color.accentPrimary};
  border-radius: 999rem;
  padding: 0.375rem 0.75rem;
`;
