import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  /* border: 1px solid red; */

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: calc(100vw - 3rem);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .paragraph {
    margin-top: 0.75rem;
  }
  a {
    margin-top: 1rem;
  }
`;

export const AboutMeSection = () => (
  <MainPageSection id="about-me">
    <StyledWrapper>
      <SectionHeading>About me</SectionHeading>
      <DoubleLineDivider />
      <SectionParagraph className="paragraph">
        I craft digital dreams through code and creativity.
      </SectionParagraph>
      <FrameLink href={'/about-me'}>Show more</FrameLink>
    </StyledWrapper>
  </MainPageSection>
);
