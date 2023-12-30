import { MainLogoSVG } from '../MainLogoSVG/MainLogoSVG';
import { StyledH1 } from './MainLogo.styles';

export const MainLogo = () => (
  <StyledH1>
    <div className="logo-wrapper">
      <MainLogoSVG />
    </div>
    <span>PanKarton</span>
  </StyledH1>
);
