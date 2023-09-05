import { Dot, StyledWrapper } from './DottedLine.styles';

const windowWidth = window.innerWidth;

export const DottedLine = () => {
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
