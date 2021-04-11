import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgVtc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="vtc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#048657" />
        <Stop offset="100%" stopColor="#07f29d" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#vtc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M94.952 248.27l21.45-24.431h76.318l46.893 59.818 122.705-169.983a156.255 156.255 0 0120.46 22.44 165.022 165.022 0 0116.456 26.906L248.589 371.393c-2.849 2.992-5.841 4.488-8.976 4.488-3.146 0-6.303-1.496-9.482-4.488L134.86 248.259H94.952z"
    />
  </Svg>
);

export default SvgVtc;
