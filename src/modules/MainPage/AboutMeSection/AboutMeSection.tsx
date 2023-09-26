import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import { FlexWrapper, StyledTextWrapper, StyledImagesWrapper } from './AboutMeSection.styles';

export const AboutMeSection = () => (
  <MainPageSection id="about-me">
    <FlexWrapper>
      <StyledTextWrapper>
        <SectionHeading>About me</SectionHeading>
        <DoubleLineDivider />
        <SectionParagraph className="paragraph">
          I craft digital dreams through code and creativity.
        </SectionParagraph>
        <FrameLink href={'/about-me'}>Show more</FrameLink>
      </StyledTextWrapper>
      <StyledImagesWrapper></StyledImagesWrapper>
    </FlexWrapper>
  </MainPageSection>
);
