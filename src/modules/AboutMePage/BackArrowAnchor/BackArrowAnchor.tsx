import { GoArrowLeft } from 'react-icons/go';
import { StyledAnchor } from './BackARrowAnchor.styles';

export const BackArrowAnchor = () => (
  <StyledAnchor href="javascript:history.back()">
    <GoArrowLeft />
  </StyledAnchor>
);
