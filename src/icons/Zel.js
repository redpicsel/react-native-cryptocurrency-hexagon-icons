import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgZel = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="zel_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#183c87" />
        <Stop offset="100%" stopColor="#2e66d9" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#zel_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M121 237.765l49.445-27.918 49.434 27.918v53.317L170.445 319 121 291.082v-53.317zm143.11 0l49.445-27.918L363 237.765v53.317L313.555 319l-49.434-27.918v-53.317zm-5.192 46.31l-17.347 9.537-16.489-9.053V233.53l-45.1-25.476V189.53L241.571 154l61.578 35.53v19.03l-44.231 24.97v50.556z"
    />
  </Svg>
);

export default SvgZel;
