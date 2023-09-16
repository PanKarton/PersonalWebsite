import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
  padding-inline: 0.5rem;
`;

export const StyledButton = styled.button`
  position: relative;
  border: 0.0625rem solid ${({ theme }) => theme.color.accentPrimary};
  padding: 0.75rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrast};
  text-align: center;

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
