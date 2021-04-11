import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgShift = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="shift_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#964b9c" />
        <Stop offset="100%" stopColor="#ba7bbf" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#shift_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        opacity={0.6}
        d="M291.577 246.466l-49.192 49.181h98.362l-49.17-49.181z"
      />
      <Path
        opacity={0.7}
        d="M192.808 246.51L242 197.34h-98.373l49.192 49.181z"
      />
      <Path
        opacity={0.4}
        d="M242.385 295.658l49.06-49.06-49.28-49.302-98.373 98.362 98.362 98.373 98.373-98.373h-.022z"
      />
      <Path
        opacity={0.8}
        d="M242.616 99l-98.307 98.307H242l-48.906 48.906 49.522 49.511 98.362-98.362z"
      />
    </G>
  </Svg>
);

export default SvgShift;
