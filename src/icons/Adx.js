import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgAdx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="adx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1b75bc" />
        <Stop offset="100%" stopColor="#4aa0e5" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#adx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M193.457 160.622L242 211.288l47.355-50.666L319 190.96 270.644 242 319 292.633l-29.645 30.723L242 272.712l-48.543 50.644L165 293.48l47.96-51.766L165 190.96l28.457-30.327zm3.905-4.136L241.802 110l44.44 46.486-23.386 24.915-21.054-23.254-21.054 23.254-23.386-24.915zm0 171.028l23.386-24.915 21.054 23.254 21.054-23.254 23.386 24.915L241.802 374l-44.44-46.486z"
    />
  </Svg>
);

export default SvgAdx;
