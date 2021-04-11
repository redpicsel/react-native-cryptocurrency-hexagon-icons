import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgEop = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="eop_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#35a7df" />
        <Stop offset="100%" stopColor="#71c1e8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#eop_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M227.854 374l-58.828-156.893-23.76 108.24zm15.466-262.119l-64.493 78.452 64.493 164.813 64.867-164.813zM259.16 374l58.839-156.893 23.375 108.24z"
      fill="#FEFFFE"
    />
  </Svg>
);

export default SvgEop;
