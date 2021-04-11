import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgWan = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="wan_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#136aad" />
        <Stop offset="100%" stopColor="#369be8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#wan_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M143 187.99l29.337 12.43v69.883L242 228.646l70.334 41.657V200.42L341 187.99v131.714l-99-58.465-99 58.465V187.99zm3.333-5.379L242 126.5l96.338 56.111-26.004 10.758L242 152.713l-69.663 40.656-26.004-10.758zm20.669 130.031l21.67-12.43 53.658 31.075 52.998-31.075 22.33 12.43L242.33 357.5l-75.328-44.858z"
    />
  </Svg>
);

export default SvgWan;
