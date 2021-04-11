import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgBlock = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="block_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#101341" />
        <Stop offset="100%" stopColor="#2931a8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#block_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M187.242 143H299.75l57.75 99-57.75 99H186.241l56.76-99-55.77-99zm59.73 34.826L283.833 242l-36.85 64.174h32.868L316.679 242l-36.85-64.174h-32.846z" />
      <Path
        opacity={0.5}
        d="M199.243 187.286L167.321 242l31.636 54.23-20.229 35.299L126.5 242l52.679-90.321z"
      />
    </G>
  </Svg>
);

export default SvgBlock;
