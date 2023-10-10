import { StyledFooter, StyledIconsWrapper } from './Footer.styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const Footer = () => (
  <StyledFooter>
    <div className="max-width-wrapper">
      <div className="copyright-wrapper">
        <span>&copy; 2023 Arkadiusz Piersiak </span>
        <span>| All rights reserved</span>
      </div>

      <StyledIconsWrapper>
        <div className="icon">
          <a href="">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiFillGithub />
          </a>
        </div>
      </StyledIconsWrapper>
    </div>
  </StyledFooter>
);
