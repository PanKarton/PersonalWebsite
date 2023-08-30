import { MainPageSection } from '@/components/molecules/MainPageSection/MainPageSection';
import Image from 'next/image';
import styled from 'styled-components';
import dotsSquare from 'public/images/dot-square.svg';

const ImageWrapper = styled.div`
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
    <MainPageSection id="hello">
      <p>Hi, my name is</p>
      <h2>Arkadiusz Piersiak</h2>
      <p>I’m home made frontend developer</p>

      <ImageWrapper>
        <Image src={dotsSquare} alt="square made of dots" fill />
      </ImageWrapper>
    </MainPageSection>
  );
};
