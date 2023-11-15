import Image from 'next/image';
import logo from 'public/images/logo.svg';
import { StyledH1 } from './MainLogo.styles';

export const MainLogo = ({ isColorReversed }: { isColorReversed: boolean }) => (
  <StyledH1 className={isColorReversed ? 'colorReversed' : ''}>
    <div className="logo-wrapper">
      <Image src={logo} alt="carton box made of dots logo" fill />
    </div>
    <span>PanKarton</span>
  </StyledH1>
);
