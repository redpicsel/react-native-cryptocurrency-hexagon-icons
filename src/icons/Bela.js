import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBela = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="bela_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#13a0f6" />
        <Stop offset="100%" stopColor="#59bcf8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#bela_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M157.267 193.248A26.642 26.642 0 01143 169.642a26.576 26.576 0 1150.083-12.474 97.801 97.801 0 0149.511-13.376c54.34 0 98.406 44.154 98.406 98.604S296.945 341 242.594 341s-98.406-44.143-98.406-98.604a98.34 98.34 0 0113.079-49.148zm85.327 97.658c26.73 0 48.4-21.714 48.4-48.51s-21.67-48.51-48.4-48.51-48.4 21.725-48.4 48.51 21.67 48.51 48.4 48.51z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBela;
