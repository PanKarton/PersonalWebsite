import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import mePicture from 'public/images/me-description-img.png';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding-inline: clamp(1rem, 7vw, 3rem);
  h2 {
  }
  h3 {
  }
  .flex-wrapper {
    display: flex;
  }

  .description-wrapper {
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1.33;
  width: 30rem;
`;

export const Description = styled.p``;

export const MeDescriptionSection = () => (
  <MainPageSection isWhite>
    <ContentWrapper>
      <h2>WHO AM I</h2>
      <div className="flex-wrapper">
        <ImageWrapper>
          <Image src={mePicture} alt="me standing" fill />
        </ImageWrapper>
        <div className="description-wrapper">
          <h3>Arkadiusz Piersiak</h3>
          <Description>
            {`I am a beginner frontend developer who loves to write code. I studied (and started
  unplanned) on a regular basis, and this is what I've come up with for over a year and a half
  in my spare time after work. Currently, I decided to work as a feelancer and gain commercial
  experience.`}
          </Description>
        </div>
      </div>
    </ContentWrapper>
  </MainPageSection>
);
