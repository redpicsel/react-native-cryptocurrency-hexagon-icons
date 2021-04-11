import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgLpt = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="lpt_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#4c4c4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#lpt_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M222.475 324.313h38.588v38.588h-38.588zm0-170.313h38.588v38.588h-38.588zm90.937 0H352v38.588h-38.588zM132 154h38.588v38.588H132zm135.938 85.162h38.588v38.588h-38.588zm-91.025 0h38.588v38.588h-38.588z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgLpt;
