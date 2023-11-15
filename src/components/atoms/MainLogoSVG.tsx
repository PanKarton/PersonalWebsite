import styled from 'styled-components';

export const StyledSvg = styled.svg`
  path {
    stroke: ${({ theme }) => theme.color.accentPrimary};
    fill: ${({ theme }) => theme.color.accentPrimary};
    transition: all 125ms ease-in-out;
  }

  &.reversedColor {
    path {
      stroke: ${({ theme }) => theme.color.primary};
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const MainLogoSVG = ({ isReversed }: { isReversed?: boolean }) => {
  return (
    <StyledSvg
      className={isReversed ? 'reversedColor' : ''}
      xmlns="http://www.w3.org/2000/svg"
      width={826}
      height={948}
      viewBox="0 0 619.5 711"
    >
      <defs>
        <clipPath id="a">
          <path d="M.184 161H447v403H.184Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="M.184 151H404v559H.184Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M.184 0H419v570H.184Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M.184 430H488v280H.184Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="M.184 94H452v452H.184Zm0 0" />
        </clipPath>
        <clipPath id="f">
          <path d="M.184 0H509v498H.184Zm0 0" />
        </clipPath>
        <clipPath id="g">
          <path d="M122 404h489v306H122Zm0 0" />
        </clipPath>
        <clipPath id="h">
          <path d="M.184 236H521v474H.184Zm0 0" />
        </clipPath>
        <clipPath id="i">
          <path d="M.184 199H429v456H.184Zm0 0" />
        </clipPath>
        <clipPath id="j">
          <path d="M34 174h563v536H34Zm0 0" />
        </clipPath>
        <clipPath id="k">
          <path d="M145 164h473.816v400H145Zm0 0" />
        </clipPath>
        <clipPath id="l">
          <path d="M199 0h419.816v556H199Zm0 0" />
        </clipPath>
        <clipPath id="m">
          <path d="M206 173h412.816v537H206Zm0 0" />
        </clipPath>
        <clipPath id="n">
          <path d="M188 0h430.816v324H188Zm0 0" />
        </clipPath>
        <clipPath id="o">
          <path d="M265 0h353.816v486H265Zm0 0" />
        </clipPath>
        <clipPath id="p">
          <path d="M322 66h296.816v488H322Zm0 0" />
        </clipPath>
        <clipPath id="q">
          <path d="M271 246h347.816v464H271Zm0 0" />
        </clipPath>
        <clipPath id="r">
          <path d="M323 176h295.816v490H323Zm0 0" />
        </clipPath>
        <clipPath id="s">
          <path d="M207 411h411.816v299H207Zm0 0" />
        </clipPath>
        <clipPath id="t">
          <path d="M440 3h58v47h-58Zm0 0" />
        </clipPath>
        <clipPath id="u">
          <path d="m445.5 0 56.8 6.684-5.01 42.609-56.806-6.684Zm0 0" />
        </clipPath>
        <clipPath id="v">
          <path d="m473.902 3.344 23.387 45.949-56.805-6.684Zm0 0" />
        </clipPath>
        <clipPath id="w">
          <path d="M445 660h61v45h-61Zm0 0" />
        </clipPath>
        <clipPath id="x">
          <path d="m512.102 699.605-60.692 9.786-6.25-38.754 60.692-9.785Zm0 0" />
        </clipPath>
        <clipPath id="y">
          <path d="m481.754 704.5-36.594-33.863 60.692-9.785Zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path fill="none" strokeWidth={35.20065} d="m12.723 360.742 234.953 3.309" />
      </g>
      <g clipPath="url(#b)">
        <path fill="none" strokeWidth={35.20065} d="m15.375 350.21 189.152 286.993" />
      </g>
      <g clipPath="url(#c)">
        <path fill="none" strokeWidth={35.20065} d="M14.297 370.133 218.945 95.606" />
      </g>
      <path fill="none" strokeWidth={35.20065} d="m288.219 103.129-82.89-.422" />
      <g clipPath="url(#d)">
        <path fill="none" strokeWidth={35.20065} d="m288.3 630.152-97.355-.847" />
      </g>
      <path
        fill="none"
        strokeWidth={35.20065}
        d="m294.563 49.008 103.433 67.68M393.512 110.355l-159.93 244.598"
      />
      <g clipPath="url(#e)">
        <path fill="none" strokeWidth={35.20065} d="m169.55 293.2 82.552 53.07" />
      </g>
      <g clipPath="url(#f)">
        <path fill="none" strokeWidth={35.20065} d="M309.027 58.957 145.441 298.18" />
      </g>
      <g clipPath="url(#g)">
        <path fill="none" strokeWidth={35.20065} d="m411.492 603.418-90.015 65.41" />
      </g>
      <g clipPath="url(#h)">
        <path fill="none" strokeWidth={35.20065} d="M321.824 689.168 148.598 435.465" />
      </g>
      <g clipPath="url(#i)">
        <path fill="none" strokeWidth={35.20065} d="m229.395 398.242-79.434 57.633" />
      </g>
      <g clipPath="url(#j)">
        <path fill="none" strokeWidth={35.20065} d="M396.96 613.285 233.505 373.973" />
      </g>
      <g clipPath="url(#k)">
        <path fill="none" strokeWidth={35.20065} d="m344.195 363.324 191.563.57" />
      </g>
      <path
        fill="none"
        strokeWidth={35.20065}
        d="m303.258 262.863 61.05 100.465M298.656 450.492l70.254-94.254"
      />
      <g clipPath="url(#l)">
        <path fill="none" strokeWidth={35.20065} d="m398.437 105.602 136.758 250.703" />
      </g>
      <g clipPath="url(#m)">
        <path fill="none" strokeWidth={35.20065} d="M535.55 372.332 405.294 611.055" />
      </g>
      <g clipPath="url(#n)">
        <path fill="none" strokeWidth={35.20065} d="m387.406 124.574 91.356-99.46" />
      </g>
      <g clipPath="url(#o)">
        <path fill="none" strokeWidth={35.20065} d="m464.531 23.613 138.047 262.64" />
      </g>
      <g clipPath="url(#p)">
        <path fill="none" strokeWidth={35.20065} d="m521.945 353.879 83.278-88.164" />
      </g>
      <g clipPath="url(#q)">
        <path fill="none" strokeWidth={35.20065} d="m602.707 445.512-132.043 242.82" />
      </g>
      <g clipPath="url(#r)">
        <path fill="none" strokeWidth={35.20065} d="m605.102 466.086-82.25-90.309" />
      </g>
      <g clipPath="url(#s)">
        <path fill="none" strokeWidth={35.20065} d="m487.227 685.582-80.832-74.95" />
      </g>
      <g clipPath="url(#t)">
        <g clipPath="url(#u)">
          <g clipPath="url(#v)">
            <path d="m445.5 0 56.8 6.684-5.01 42.609-56.806-6.684Zm0 0" />
          </g>
        </g>
      </g>
      <g clipPath="url(#w)">
        <g clipPath="url(#x)">
          <g clipPath="url(#y)">
            <path d="m512.102 699.605-60.692 9.786-6.25-38.754 60.692-9.785Zm0 0" />
          </g>
        </g>
      </g>
    </StyledSvg>
  );
};
