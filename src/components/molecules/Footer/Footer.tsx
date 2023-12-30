import { StyledFooter, StyledIconsWrapper } from './Footer.styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { ForwardedRef, forwardRef } from 'react';

type FooterProps = {
  isColorReversed?: boolean;
  isAbsolute?: boolean;
};

export const Footer = forwardRef(
  ({ isColorReversed, isAbsolute }: FooterProps, ref: ForwardedRef<HTMLElement>) => {
    const classes = `${isColorReversed ? 'isColorReversed' : ''} ${isAbsolute ? 'isAbsolute' : ''}`;
    return (
      <StyledFooter ref={ref} className={classes}>
        <div className="max-width-wrapper">
          <div className="copyright-wrapper">
            <span>&copy; {`${new Date().getFullYear()} Arkadiusz Piersiak`} </span>

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
  }
);

Footer.displayName = 'Footer';
