import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTzc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="tzc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#374851" />
        <Stop offset="100%" stopColor="#648393" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tzc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M260.7 235.4v83.578a81.316 81.316 0 006.6-1.903v32.01a110.319 110.319 0 01-44 1.331V235.4h-38.5v-30.8h114.4v30.8zm15.4 111.21V313.5a79.2 79.2 0 10-68.2 0v33.11C163.845 332.255 132 290.84 132 242c0-60.753 49.247-110 110-110s110 49.247 110 110c0 48.84-31.845 90.255-75.9 104.61z"
      fill="#fff"
    />
  </Svg>
);

export default SvgTzc;
