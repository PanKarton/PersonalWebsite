import styled from 'styled-components';

export const StyledWrapper = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.primary};

  &:not(:has(ul.static)) {
    footer {
      margin-top: 3.5rem;
    }
  }
`;
