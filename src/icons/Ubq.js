import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgUbq = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ubq_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00ea90" />
        <Stop offset="100%" stopColor="#3dfeb4" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ubq_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        fillOpacity={0.698}
        d="M266.365 148.588l85.547 44.748-82.423 50.523-3.124-95.271zm-48.73 186.351l-85.547-44.748 82.423-50.534 3.124 95.282z"
      />
      <Path d="M351.912 293.469L232.969 363v-97.559l118.943-72.105v100.133zm-219.824-103.4L251.031 121v97.174l-118.943 72.017V190.058z" />
    </G>
  </Svg>
);

export default SvgUbq;
