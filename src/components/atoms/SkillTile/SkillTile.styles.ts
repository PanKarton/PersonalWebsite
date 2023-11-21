import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .skill-icon {
    position: relative;
    width: 5rem;
    aspect-ratio: 0.75;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.text3XL};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.contrastDarkerHover};
  }
`;
