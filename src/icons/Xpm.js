import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXpm = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xpm_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ffd81b" />
        <Stop offset="100%" stopColor="#ffe35f" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xpm_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M330 237.182c0 48.653-37.686 65.197-69.41 65.197v12.683h24.475v17.182h-24.464V352h-38.28v-19.756h-23.397v-17.182h23.353v-12.848c-10.153 0-68.277-2.409-68.277-68.563V154h38.005v82.698c0 34.529 30.426 34.21 30.426 34.21V154h38.17v116.908s31.394 1.76 31.394-34.683V154H330z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXpm;
