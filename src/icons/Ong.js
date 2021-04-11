import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Circle
} from "react-native-svg";

const SvgOng = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ong_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#4c4c4c" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ong_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G transform="matrix(11 0 0 11 121 121)" fill="#FFF">
      <Path d="M10.943 21.311c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H0c.869 5.05 5.18 8.878 10.943 8.878z" />
      <Circle cx={10.971} cy={2.527} r={2.527} />
      <Path d="M4.655 12.433v-.05c0-3.593 2.574-6.526 6.285-6.526 3.712 0 6.34 2.983 6.346 6.576H4.655z" />
    </G>
  </Svg>
);

export default SvgOng;
