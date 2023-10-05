import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { LShapeDivider } from '@/components/atoms/LShapeDivider/LShapeDivider';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { FlexWrapper, StyledWrapper } from './MyProjectsSection.styles';

export const MyProjectsSection = () => (
  <MainPageSection id="my-projects">
    <FlexWrapper>
      <StyledWrapper>
        <SectionHeading>Latest project</SectionHeading>
        <LShapeDivider />
        <FrameLink href={'/my-projects'}>Show more</FrameLink>
      </StyledWrapper>
    </FlexWrapper>
  </MainPageSection>
);
