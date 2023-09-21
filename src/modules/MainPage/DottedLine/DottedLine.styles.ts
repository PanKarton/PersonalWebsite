import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: none;
  bottom: 3rem;
  width: 100vw;
  justify-content: center;
  gap: 1.75rem;
  @media screen and (min-width: 37.5rem) {
    display: flex;
    position: absolute;
  }
`;

export const Dot = styled.span`
  width: 0.375rem;
  aspect-ratio: 1;
  border-radius: 9999rem;
  background-color: ${({ theme }) => theme.color.accentPrimary};
`;
