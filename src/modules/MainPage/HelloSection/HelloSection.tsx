import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import dotsSquare from 'public/images/dot-square.svg';
import heroImg from 'public/images/hero-img.png';
import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import {
  DotSquareImageWrapper,
  HeroHeading,
  HeroImgWrapper,
  HeroTextWrapper,
  HeroWrapper,
} from './HelloSection.styles';

export const HelloSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MainPageSection id="hello">
        <HeroWrapper>
          <HeroTextWrapper>
            <p>Hi, my name is</p>
            <HeroHeading>Arkadiusz Piersiak</HeroHeading>
            <DoubleLineDivider />
            <p className="big">I’m home made frontend developer</p>
          </HeroTextWrapper>

          <HeroImgWrapper>
            <Image src={heroImg} alt="box image bade of dots" fill />
          </HeroImgWrapper>
        </HeroWrapper>
      </MainPageSection>
      <DotSquareImageWrapper>
        <Image src={dotsSquare} alt="square made of dots" fill />
      </DotSquareImageWrapper>
    </div>
  );
};
