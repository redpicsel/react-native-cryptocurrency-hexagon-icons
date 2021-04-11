import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGold = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="gold_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f1b32b" />
        <Stop offset="100%" stopColor="#f5c96a" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gold_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M239.25 110C167.86 110 110 167.86 110 239.25S167.86 368.5 239.25 368.5 368.5 310.64 368.5 239.25A129.25 129.25 0 00239.25 110zm0 226.27a97.02 97.02 0 110-194.04 97.02 97.02 0 010 194.04zm-32.23-96.91l32.34 48.4 32.12-48.4-32.12-48.51-32.34 48.51z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgGold;
