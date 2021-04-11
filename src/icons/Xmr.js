import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXmr = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xmr_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f60" />
        <Stop offset="100%" stopColor="#fe934c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xmr_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M241.67 123.585c65.835 0 119.075 53.24 119.075 119.064a121.77 121.77 0 01-6.138 37.752h-35.486V180.367l-77.44 77.44-77.44-77.44v100.034h-35.497a121.77 121.77 0 01-6.127-37.752c0-65.824 53.24-119.064 119.064-119.064zM223.938 275.22L242 292.985l17.743-17.754 33.561-33.88v62.92h50.017a118.866 118.866 0 01-101.64 57.112c-42.922 0-80.674-22.902-101.64-57.112h50.006v-62.92l33.88 33.88z"
    />
  </Svg>
);

export default SvgXmr;
