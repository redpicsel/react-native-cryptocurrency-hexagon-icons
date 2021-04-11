import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgNexo = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="nexo_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1a4199" />
        <Stop offset="100%" stopColor="#386bdd" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#nexo_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        d="M183.436 144.375l118.052 68.101v69.509L121 177.749l57.915-33.374a4.62 4.62 0 014.62 0"
        opacity={0.7}
      />
      <Path opacity={0.9} d="M301.488 143l-60.137 34.76 60.137 34.716z" />
      <Path d="M301.488 143l57.904 33.396a4.62 4.62 0 012.42 4.037v136.279l-60.324-34.727V143z" />
      <Path
        d="M361.691 316.712l-57.904 33.363a4.84 4.84 0 01-4.62 0l-118.052-68.09v-69.608l180.576 104.335z"
        opacity={0.9}
      />
      <Path
        d="M121 177.76v136.257a4.62 4.62 0 002.42 4.048l57.915 33.396V212.377L121 177.76z"
        opacity={0.6}
      />
      <Path opacity={0.7} d="M181.236 351.45l60.115-34.738-60.115-34.727z" />
    </G>
  </Svg>
);

export default SvgNexo;
