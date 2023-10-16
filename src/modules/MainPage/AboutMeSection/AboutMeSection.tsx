import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import bigImage from 'public/images/about-me-img-big.png';
import smallImage from 'public/images/about-me-img-small.png';
import { ForwardedRef, forwardRef } from 'react';
import { FlexWrapper, StyledTextWrapper, StyledImagesWrapper } from './AboutMeSection.styles';

export const AboutMeSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => (
  <MainPageSection id="about-me" ref={ref}>
    <FlexWrapper>
      <StyledTextWrapper>
        <SectionHeading>About me</SectionHeading>
        <DoubleLineDivider />
        <SectionParagraph className="paragraph">
          I craft digital dreams through code and creativity.
        </SectionParagraph>
        <FrameLink href={'/about-me'}>Show more</FrameLink>
      </StyledTextWrapper>
      <StyledImagesWrapper>
        <div className="big-img-wrapper">
          <Image src={bigImage} alt="me sitting with laptop" fill />
        </div>
        <div className="small-img-wrapper">
          <Image src={smallImage} alt="me drinking coffee" fill />
        </div>
      </StyledImagesWrapper>
    </FlexWrapper>
  </MainPageSection>
));

AboutMeSection.displayName = 'AboutMeSection';
