// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      primarySlightlyLighter: string;
      primaryLighter: string;
      contrast: string;
      contrastDarker: string;
      contrastDarkerHover: string;
      contrastHighlyTransparent: string;
      accentPrimary: string;
      accentPrimarySlightlyDarker: string;
    };
    fontSize: {
      textXS: string;
      textSM: string;
      textBase: string;
      textLG: string;
      textXL: string;
      text2XL: string;
      text3XL: string;
      text4XL: string;
      text5XL: string;
      text6XL: string;
      text7XL: string;
      text8XL: string;
      text9XL: string;
    };
  }
}
