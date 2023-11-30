import { GoArrowLeft } from 'react-icons/go';
import { StyledAnchor } from './BackARrowAnchor.styles';

export const BackArrowAnchor = ({ isColorReversed }: { isColorReversed: boolean }) => (
  <StyledAnchor href="/#about-me" className={isColorReversed ? 'colorReversed' : ''}>
    <GoArrowLeft />
  </StyledAnchor>
);
