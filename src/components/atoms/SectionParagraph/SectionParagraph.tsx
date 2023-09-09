import styled from 'styled-components';

export const SectionParagraph = styled.p`
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  max-width: 15rem;
`;
