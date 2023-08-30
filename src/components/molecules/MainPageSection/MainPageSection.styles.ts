import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  .max-width-wrapper {
    position: relative;
    width: 1440px;
    border-inline: 1px solid red;
  }
`;
