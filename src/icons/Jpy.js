import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgJpy = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="jpy_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#eac749" />
        <Stop offset="100%" stopColor="#f0d77f" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#jpy_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M259.028 271.821v20.658h55.693v25.168h-55.693V346.5h-34.056v-28.853h-55.693v-25.168h55.693v-20.658h-55.693v-25.168h45.881L148.5 148.5h41.272l52.8 82.874 52.811-82.874H335.5l-66.946 98.153h46.167v25.168z"
      fill="#fff"
    />
  </Svg>
);

export default SvgJpy;
