import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgEos = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="eos_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#4c4c4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#eos_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.04}
      d="M185.746 193.71L242 370.337l-83.468-52.294 27.214-124.333L242 116.864v53.9l-83.468 147.279h167.013l-83.468-147.279v-53.9l56.243 76.846 27.225 124.333-83.468 52.294L298.32 193.71"
    />
  </Svg>
);

export default SvgEos;
