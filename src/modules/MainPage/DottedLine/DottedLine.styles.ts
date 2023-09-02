import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: none;
  bottom: 3rem;
  right: clamp(2rem, 4vw, 4rem);
  display: flex;
  justify-content: flex-end;
  gap: 1.75rem;
  z-index: 999;
  @media screen and (min-width: 37.5rem) {
    position: absolute;
  }
`;

export const Dot = styled.span`
  width: 0.375rem;
  aspect-ratio: 1;
  border-radius: 9999rem;
  background-color: ${({ theme }) => theme.color.accentPrimary};
`;
