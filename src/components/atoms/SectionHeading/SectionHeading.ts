import styled from 'styled-components';

export const SectionHeading = styled.h2`
  color: ${({ theme }) => theme.color.accentPrimary};
  font-weight: 400;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSize.text5XL};
  @media screen and (min-width: 25rem) {
    font-size: ${({ theme }) => theme.fontSize.text6XL};
  }
  @media screen and (min-width: 56.25rem) {
    font-size: clamp(4rem, 6.5vw, 6rem);
  }
  @media screen and (min-width: 87.5rem) {
    font-size: ${({ theme }) => theme.fontSize.text9XL};
    line-height: 0.9;
  }
`;
