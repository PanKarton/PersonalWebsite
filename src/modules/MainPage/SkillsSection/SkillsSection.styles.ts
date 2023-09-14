import styled from 'styled-components';

export const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 5rem 0 7rem 1rem;

  @media screen and (min-width: 50rem) {
    justify-content: flex-start;
  }
`;

export const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillsWrapper = styled.div`
  border: 1px solid red;
  height: 100%;
  width: calc(100% - 1rem);
`;
