import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 1.25rem;
  width: 7rem;

  span {
    display: block;
    background-color: ${({ theme }) => theme.color.accentPrimary};
    border-radius: 0.25rem;
    width: 4rem;
    height: 3px;
    position: absolute;
  }
  span:first-child {
    top: 0;
    left: 0;
  }

  span:nth-child(2) {
    bottom: 0;
    right: 0;
  }
`;
