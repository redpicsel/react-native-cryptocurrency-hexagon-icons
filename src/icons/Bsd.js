import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBsd = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="bsd_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#4c4c4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#bsd_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M374 232.397H110l153.604-51.59L285.197 110 374 232.397zm-262.79 16.808h261.58l-153.593 50.391-21.593 73.205-86.405-123.596z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgBsd;
