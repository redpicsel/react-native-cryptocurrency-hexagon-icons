import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGbp = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="gbp_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#bc3fe0" />
        <Stop offset="100%" stopColor="#d078e9" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gbp_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M187.957 228.965v-25.652c0-40.436 24.409-65.813 66.825-65.813 32.252 0 50.27 13.662 64.218 31.24l-27.313 20.9c-10.461-12.815-20.35-20.35-36.608-20.35-19.47 0-31.097 13.387-31.097 34.87v24.805h72.358v29.007h-72.358v47.685h94.435V335.5H165v-21.747l22.957-6.699v-49.082H165v-29.007z"
      fill="#fff"
    />
  </Svg>
);

export default SvgGbp;
