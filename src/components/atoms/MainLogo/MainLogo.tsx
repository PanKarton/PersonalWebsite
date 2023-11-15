import Image from 'next/image';
import Logo from 'public/images/logo.svg';
import { MainLogoSVG } from '../MainLogoSVG';
import { StyledH1 } from './MainLogo.styles';

export const MainLogo = ({ isColorReversed }: { isColorReversed: boolean }) => (
  <StyledH1 className={isColorReversed ? 'colorReversed' : ''}>
    <div className="logo-wrapper">
      <MainLogoSVG isReversed={isColorReversed} />
    </div>
    <span>PanKarton</span>
  </StyledH1>
);
