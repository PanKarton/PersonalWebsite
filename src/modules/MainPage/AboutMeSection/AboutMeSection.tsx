import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { FrameLink } from '@/components/atoms/FrameLink/FrameLink';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { SectionParagraph } from '@/components/atoms/SectionParagraph/SectionParagraph';
import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import styled from 'styled-components';

export const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledWrapper = styled.div`
  width: calc(100vw - 3rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  .paragraph {
    margin-top: 0.75rem;
  }
  a {
    margin-top: 1rem;
  }

  @media screen and (min-width: 37.5rem) {
    max-width: 25rem;
  }
`;

export const AboutMeSection = () => (
  <MainPageSection id="about-me">
    <FlexWrapper>
      <StyledWrapper>
        <SectionHeading>About me</SectionHeading>
        <DoubleLineDivider />
        <SectionParagraph className="paragraph">
          I craft digital dreams through code and creativity.
        </SectionParagraph>
        <FrameLink href={'/about-me'}>Show more</FrameLink>
      </StyledWrapper>
    </FlexWrapper>
  </MainPageSection>
);
