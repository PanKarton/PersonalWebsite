import Image from 'next/image';
import mePicture from 'public/images/me-description-img.png';
import { ForwardedRef, forwardRef, RefObject } from 'react';
import { ContentWrapper, Description, ImageWrapper, StyledSection } from './MeDescription.styles';

export const MeDescriptionSection = forwardRef((_, ref: ForwardedRef<HTMLElement>) => (
  <StyledSection ref={ref}>
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
  </StyledSection>
));

MeDescriptionSection.displayName = 'MeDescriptionSection';
