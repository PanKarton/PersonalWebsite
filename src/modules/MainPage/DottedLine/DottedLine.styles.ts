import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: none;
  bottom: 3rem;
  right: clamp(2rem, 4vw, 4rem);
  left: 0.875rem;
  justify-content: space-between;
  gap: 1.75rem;
  @media screen and (min-width: 37.5rem) {
    /* display: flex; */
    position: absolute;
  }
`;

export const Dot = styled.span`
  width: 0.25rem;
  aspect-ratio: 1;
  border-radius: 9999rem;
  background-color: ${({ theme }) => theme.color.accentPrimary};
`;
