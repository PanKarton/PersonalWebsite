import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import dotsSquare from 'public/images/dot-square.svg';
import heroImg from 'public/images/hero-img.png';
import { LShapeDivider } from '@/components/atoms/LShapeDivider/LShapeDivider';
import { DottedLine } from '@/modules/MainPage/DottedLine/DottedLine';

import {
  DotSquareImageWrapper,
  HeroHeading,
  HeroImgWrapper,
  HeroTextWrapper,
  HeroWrapper,
  StyledWrapper,
} from './HelloSection.styles';

export const HelloSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MainPageSection id="hello">
        <StyledWrapper>
          <HeroWrapper>
            <HeroTextWrapper>
              <p>Hi, my name is</p>
              <HeroHeading>Arkadiusz Piersiak</HeroHeading>
              <LShapeDivider />
              <p className="big">I’m home made frontend developer</p>
            </HeroTextWrapper>

            <HeroImgWrapper>
              <div>
                <Image src={heroImg} alt="box image bade of dots" fill />
              </div>
            </HeroImgWrapper>
          </HeroWrapper>
        </StyledWrapper>
      </MainPageSection>
      <DotSquareImageWrapper>
        <Image src={dotsSquare} alt="square made of dots" fill />
      </DotSquareImageWrapper>
      <DottedLine />
    </div>
  );
};
