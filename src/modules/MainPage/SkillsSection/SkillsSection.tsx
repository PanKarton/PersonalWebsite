import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';

import styled from 'styled-components';

export const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 5rem 0 0 1rem;

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
  height: 80vw;
  width: calc(100% - 1rem);
`;

export const SkillsSection = () => (
  <MainPageSection id="skills">
    <FlexWrapper>
      <StyledHeadingWrapper>
        <SectionHeading>The techstack</SectionHeading>
        <SectionParagraph>I’m most familiar with these - more being added </SectionParagraph>
      </StyledHeadingWrapper>

      <SkillsWrapper></SkillsWrapper>
    </FlexWrapper>
  </MainPageSection>
);
