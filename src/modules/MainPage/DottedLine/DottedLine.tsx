import { useEffect, useState } from 'react';
import { Dot, StyledWrapper } from './DottedLine.styles';

export const DottedLine = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if component is run in the browser
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);
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
