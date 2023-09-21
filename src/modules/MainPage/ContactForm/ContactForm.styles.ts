import styled from 'styled-components';

export const StyledFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.primary};
`;

export const StyledForm = styled.form`
  height: 100%;
  width: min(100%, 24rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding-block: 3rem 2.5rem;
  padding-inline: 0.75rem;
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

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.color.primary};
  border: none;

  color: ${({ theme }) => theme.color.contrast};
  font-size: 1.5rem;

  @media screen and (min-width: 50rem) {
    display: none;
  }
`;
