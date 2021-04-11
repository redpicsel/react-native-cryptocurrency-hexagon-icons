import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgPpc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ppc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#3cb054" />
        <Stop offset="100%" stopColor="#6fce83" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ppc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M165 148.5c133.023 4.917 184.316 84.766 158.565 156.013-7.293 19.833-15.048 30.69-31.35 41.987.66-2.86 1.342-5.72 1.87-8.657 9.636-55.583-8.635-122.474-98.032-159.423 71.126 42.328 99.825 117.645 66.66 166.265C206.25 353.562 165 305.349 165 249.799V148.5z"
    />
  </Svg>
);

export default SvgPpc;
