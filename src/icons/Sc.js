import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgSc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="sc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#20ee82" />
        <Stop offset="100%" stopColor="#62f3a7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#sc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M242 148.5a93.5 93.5 0 0193.5 93.5v93.5H242a93.5 93.5 0 110-187zm56.1 149.6v-55.253c0-31.02-24.805-56.793-55.814-56.947a56.166 56.166 0 00-56.386 56.386c.154 31.009 25.938 55.814 56.947 55.814H298.1z"
    />
  </Svg>
);

export default SvgSc;
