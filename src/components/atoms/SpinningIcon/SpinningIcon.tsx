import { VscLoading } from 'react-icons/vsc';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    translate: 0 0.0625rem;
    animation: rotate 1500ms linear infinite;
    color: ${({ theme }) => theme.color.accentPrimary};
    font-size: 1.5rem;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinningIcon = () => {
  return (
    <StyledWrapper>
      <VscLoading />
    </StyledWrapper>
  );
};
