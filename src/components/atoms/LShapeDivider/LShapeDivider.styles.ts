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
    height: 0.125rem;
    top: 0;
    left: 0;
  }

  span:nth-child(2) {
    width: 0.125rem;
    height: 1rem;
    bottom: 0;
    top: 0;
    left: 0;
  }

  @media screen and (min-width: 50rem) {
    span:first-child {
      width: 4rem;
      height: 0.1875rem;
    }

    span:nth-child(2) {
      width: 0.1875rem;
      height: 1.125rem;
    }
  }
  @media screen and (min-width: 75.5rem) {
    span:first-child {
      width: 5rem;
      height: 0.25rem;
    }

    span:nth-child(2) {
      width: 0.25rem;
      height: 1.375rem;
    }
  }

  @media screen and (min-width: 112.5rem) {
    span:first-child {
      width: 7rem;
      height: 0.325rem;
    }

    span:nth-child(2) {
      width: 0.325rem;
      height: 1.75rem;
    }
  }
`;
