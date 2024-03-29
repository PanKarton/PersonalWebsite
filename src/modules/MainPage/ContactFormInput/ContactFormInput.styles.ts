import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  translate: 0 -50%;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.contrast};
  transition: all 0.25s ease;

  &.label-float {
    font-size: 0.75rem;
    left: 0;
    top: -0.5rem;
    color: ${({ theme }) => theme.color.contrastDarker};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-bottom: 0.125rem solid ${({ theme }) => theme.color.accentPrimary};
  padding-block: 0.25rem;
  color: ${({ theme }) => theme.color.contrast};
  font-size: 1.25rem;
  padding-left: 0.5rem;

  transition: all 0.25s ease;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.contrast};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    box-shadow: inset 0 0 20px 20px ${({ theme }) => theme.color.primary};
  }
`;
