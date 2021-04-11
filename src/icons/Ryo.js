import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgRyo = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ryo_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#3d58b0" />
        <Stop offset="100%" stopColor="#7186cd" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ryo_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M241.846 110C169.136 110 110 169.136 110 241.846S169.136 373.67 241.846 373.67 373.67 314.545 373.67 241.846C373.681 169.136 314.545 110 241.846 110zm0 17.952a113.74 113.74 0 01113.883 113.894 113.74 113.74 0 01-113.883 113.883 113.74 113.74 0 01-113.894-113.883 113.751 113.751 0 01113.894-113.894z" />
      <Path d="M192.863 193.16v97.35h97.955v-97.35h-97.955zm15.95 15.95h66.044v65.45h-66.033v-65.45z" />
    </G>
  </Svg>
);

export default SvgRyo;
