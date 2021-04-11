import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTkn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="tkn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#24dd7b" />
        <Stop offset="100%" stopColor="#65e7a2" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tkn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M210.012 153.043L258.445 132l-.396 55.583H319v38.5h-61.358v66.693c0 20.24 34.32 22.627 47.234 15.884l11.704 34.936c-28.666 16.665-106.975 12.694-106.975-50.424v-140.14h.407zm-45.21 83.358c-12.045 0-21.802-11.726-21.802-26.191 0-14.476 9.757-26.202 21.802-26.202 12.034 0 21.791 11.726 21.791 26.202 0 14.465-9.757 26.191-21.791 26.191z"
    />
  </Svg>
);

export default SvgTkn;
