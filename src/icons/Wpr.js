import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgWpr = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="wpr_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ffe600" />
        <Stop offset="100%" stopColor="#feed4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#wpr_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M109.923 125.675a177.056 177.056 0 0129.15-26.455l48.972 175.098 21.703-92.818h41.14l21.692 92.818 25.707-92.818h41.239l.385 1.65 44.814 161.854a177.012 177.012 0 01-28.05 30.525l-37.807-136.51-21.56 77.858-.385 1.65h-46.046l-20.559-76.252-20.57 76.252h-46.046l-.385-1.65z"
      fill="#fff"
    />
  </Svg>
);

export default SvgWpr;
