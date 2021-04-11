import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgEth = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="eth_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#627eea" />
        <Stop offset="100%" stopColor="#91a4f0" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#eth_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path fillOpacity={0.602} d="M247.478 110v97.57l82.467 36.85z" />
      <Path d="M247.478 110L165 244.42l82.478-36.85z" />
      <Path fillOpacity={0.602} d="M247.478 307.648v66.297L330 259.776z" />
      <Path d="M247.478 373.945v-66.308L165 259.776z" />
      <Path
        fillOpacity={0.2}
        d="M247.478 292.303l82.467-47.883-82.467-36.828z"
      />
      <Path fillOpacity={0.602} d="M165 244.42l82.478 47.883v-84.711z" />
    </G>
  </Svg>
);

export default SvgEth;
