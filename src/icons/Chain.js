import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgChain = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="chain_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00aced" />
        <Stop offset="100%" stopColor="#3fcaff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#chain_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M132 172.854v44.836l108.845 62.865 70.62-40.865v36.465l38.016 22.418V172.854l-108.735 62.865z" />
      <Path
        opacity={0.7}
        d="M240.746 110L132 172.854v125.719l108.746 62.854 108.427-62.854-38.445-22.418-69.982 40.436-70.29-40.436v-80.883l70.29-40.436 69.982 40.436 38.445-22.418z"
      />
    </G>
  </Svg>
);

export default SvgChain;
