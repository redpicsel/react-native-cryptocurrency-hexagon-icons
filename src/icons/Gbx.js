import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGbx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="gbx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1666af" />
        <Stop offset="100%" stopColor="#3c95e6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gbx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M238.689 187.066v22.66h-51.7c-6.71 0-14.971 2.354-21.12 6.71-7.623 5.412-11.88 13.519-11.88 25.597s4.257 20.185 11.88 25.597c6.149 4.356 14.41 6.71 21.12 6.71h22V297h-22a59.928 59.928 0 01-33.594-10.703C139.887 276.705 132 261.679 132 242.033s7.887-34.672 21.395-44.264a59.917 59.917 0 0133.583-10.703zm-55 68.002v-22.66h55V297H216.7v-41.932zM275 209.66V187h77v110h-99.022v-87.263h22v64.592H330v-64.658z"
      fill="#fff"
    />
  </Svg>
);

export default SvgGbx;
