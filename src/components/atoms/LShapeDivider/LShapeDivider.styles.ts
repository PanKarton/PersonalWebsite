import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 1.25rem;
  width: 7rem;

  span {
    display: block;
    background-color: ${({ theme }) => theme.color.accentPrimary};
    border-radius: 0.25rem;
    position: absolute;
  }
  span:first-child {
    width: 4rem;
    height: 0.1875rem;
    top: 0;
    left: 0;
  }

  span:nth-child(2) {
    width: 0.1875rem;
    height: 1.125rem;
    bottom: 0;
    top: 0;
    left: 0;
  }
`;
