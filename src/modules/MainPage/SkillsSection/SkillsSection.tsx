import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import styled from 'styled-components';
import { FlexWrapper, SkillsWrapper, StyledHeadingWrapper } from './SkillsSection.styles';

export const TilesList = styled.ul`
  display: flex;
  gap: 1.5rem;
  overflow: hidden;
`;

export const SkillTile = styled.div`
  background-color: ${({ theme }) => theme.color.accentPrimary};
  width: 120px;
  height: 80px;
  flex-shrink: 0;
`;

export const SkillsSection = () => (
  <MainPageSection id="skills">
    <FlexWrapper>
      <StyledHeadingWrapper>
        <SectionHeading>The techstack</SectionHeading>
        <SectionParagraph>I’m most familiar with these - more being added </SectionParagraph>
      </StyledHeadingWrapper>

      <SkillsWrapper>
        <TilesList>
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
          <SkillTile />
        </TilesList>
      </SkillsWrapper>
    </FlexWrapper>
  </MainPageSection>
);
