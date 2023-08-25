import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  /*  */
  border-bottom: 1px solid white;
`;
