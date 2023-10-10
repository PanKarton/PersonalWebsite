import styled from 'styled-components';

export const StyledForm = styled.form`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: 50rem) {
    max-width: 32.5rem;
  }
`;

export const StyledSubmit = styled.button`
  position: relative;
  border: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
  padding: 0.75rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};
  text-align: center;
  width: 10rem;
  margin-left: auto;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
    translate: 0.25rem -0.25rem;
    transition: translate 250ms;
  }

  p {
    position: relative;
    translate: 0.125rem -0.125rem;
    font-size: ${({ theme }) => theme.fontSize.textBase};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    translate: -0.25rem 0.25rem;
  }

  @media screen and (min-width: 25rem) {
    width: 14rem;

    p {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }
    &::after {
      translate: 0.375rem -0.375rem;
    }
  }
`;
