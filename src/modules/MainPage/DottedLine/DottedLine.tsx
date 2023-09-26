import { useState } from 'react';
import { Dot, StyledWrapper } from './DottedLine.styles';

export const DottedLine = () => {
  const [windowWidth] = useState(window.innerWidth);
  // Width divided by gap + dot size in px
  const dotsAmount = windowWidth / (28 + 6);

  return (
    <StyledWrapper>
      {Array.from({ length: dotsAmount }, (_, index) => (
        <Dot key={index} />
      ))}
    </StyledWrapper>
  );
};
