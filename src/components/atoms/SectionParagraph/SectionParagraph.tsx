import styled from 'styled-components';

export const SectionParagraph = styled.p`
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  max-width: 15rem;

  @media screen and (min-width: 25rem) {
    font-size: ${({ theme }) => theme.fontSize.textXL};
  }
`;
