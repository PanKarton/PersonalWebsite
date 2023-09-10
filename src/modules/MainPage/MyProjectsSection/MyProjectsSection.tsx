import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { FlexWrapper, StyledWrapper } from './MyProjectsSection.styles';

export const MyProjectsSection = () => (
  <MainPageSection id="my-projects">
    <FlexWrapper>
      <StyledWrapper>
        <SectionHeading>My projets</SectionHeading>
        <DoubleLineDivider />
        <SectionParagraph className="paragraph">
          Both commercial and made just for fun.
        </SectionParagraph>
        <FrameLink href={'/my-projects'}>Show more</FrameLink>
      </StyledWrapper>
    </FlexWrapper>
  </MainPageSection>
);
