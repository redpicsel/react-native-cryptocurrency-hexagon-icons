import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgDai = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="dai_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#b68900" />
        <Stop offset="100%" stopColor="#ffc619" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#dai_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M358.963 239.987L239.987 121 121 239.987l118.987 43.956 118.976-43.956zM158.004 229.9l80.663-82.478s78.859 80.663 82.181 82.28c3.333 1.606-54.241 0-54.241 0l-26.62-27.225-26.928 27.423h-55.055zm81.983 62.414l118.976-44.264-118.976 110.913L121 248.655l118.987 43.67z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgDai;
