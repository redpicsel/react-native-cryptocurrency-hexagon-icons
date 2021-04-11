import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgMaid = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="maid_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#5592d7" />
        <Stop offset="100%" stopColor="#87b2e3" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#maid_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M288.706 205.337V348.04L168.19 278.663c-35.64-20.867-33.374-33.847-33.374-62.04l123.893 71.632v-65.439l29.986-17.49z" />
      <Path
        d="M258.72 288.255l-123.893-71.643 120.494-69.377c35.64-20.317 45.826-11.847 70.719 2.255l-123.893 71.643 56.573 32.714v34.408z"
        opacity={0.6}
      />
      <Path
        d="M202.147 221.133L326.04 149.49v138.765c0 41.184-12.441 45.694-37.334 59.796V205.337L231.55 238.04l-29.414-16.918z"
        opacity={0.2}
      />
    </G>
  </Svg>
);

export default SvgMaid;
