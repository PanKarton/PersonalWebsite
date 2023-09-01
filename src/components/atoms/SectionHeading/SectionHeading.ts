import styled from 'styled-components';

export const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.accentPrimary};
  font-weight: 400;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.text5XL};
  @media screen and (min-width: 87.5rem) {
    font-size: ${({ theme }) => theme.fontSize.text8XL};
  }
`;
