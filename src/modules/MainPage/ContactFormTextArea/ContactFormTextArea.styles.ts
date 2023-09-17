import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 30vh;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  translate: 0 -50%;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.contrast};
  transition: all 0.25s ease;

  &.label-float {
    font-size: 0.75rem;
    left: 0;
    top: -0.125rem;
    color: ${({ theme }) => theme.color.contrastDarker};
  }
`;

export const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
  padding-block: 0.25rem;
  color: ${({ theme }) => theme.color.contrast};
  font-size: 1.25rem;
  resize: none;

  transition: all 0.25s ease;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.contrast};
  }
`;
