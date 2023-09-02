import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import styled from 'styled-components';
import dotsSquare from 'public/images/dot-square.svg';
import heroImg from 'public/images/hero-img.png';
import { SectionHeading } from '@/components/atoms/SectionHeading/SectionHeading';
import { DoubleLineDivider } from '@/components/atoms/DoubleLineDivider/DoubleLineDivider';
import { DottedLine } from '@/modules/MainPage/DottedLine/DottedLine';
import { GitHubLink } from '../GitHubLink/GitHubLink';

const HeroWrapper = styled.div`
  position: absolute;
  top: 50%;
  translate: 0 -50%;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 5vh, 3rem);
  padding-inline: 2rem;

  @media screen and (min-width: 30.25rem) {
    padding-inline: 0rem;
  }
  @media screen and (min-width: 50rem) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }

  @media screen and (min-width: 87.5rem) {
    margin-left: 2rem;
  }
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textXL};
    &.big {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }

  @media screen and (min-width: 50rem) {
    max-width: 25rem;
    position: absolute;
    bottom: 15dvh;
    left: 0;
  }

  @media screen and (min-width: 87.5rem) {
    p {
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      &.big {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
  }
`;

const HeroImgWrapper = styled.div`
  position: relative;
  width: min(75vw, 25rem);
  aspect-ratio: 1.2;
  @media screen and (min-width: 50rem) {
    display: none;
    position: absolute;
    right: 0;
    top: 10%;
    width: 50vw;
  }
`;

const DotSquareImageWrapper = styled.div`
  display: none;
  position: absolute;
  top: 3rem;
  right: 4rem;
  width: 11.75rem;
  aspect-ratio: 1;
  @media screen and (min-width: 87.5rem) {
    display: block;
  }
`;

export const HelloSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <MainPageSection id="hello">
        <HeroWrapper>
          <HeroTextWrapper>
            <p>Hi, my name is</p>
            <SectionHeading>Arkadiusz Piersiak</SectionHeading>
            <DoubleLineDivider />
            <p className="big">I’m home made frontend developer</p>
          </HeroTextWrapper>

          <HeroImgWrapper>
            <Image src={heroImg} alt="box image bade of dots" fill />
          </HeroImgWrapper>
        </HeroWrapper>
        <DotSquareImageWrapper>
          <Image src={dotsSquare} alt="square made of dots" fill />
        </DotSquareImageWrapper>
      </MainPageSection>
      <GitHubLink />
      <DottedLine />
    </div>
  );
};
