import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgDock = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="dock_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#786dbc" />
        <Stop offset="100%" stopColor="#a098d0" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#dock_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M241.241 184.481l-17.919-17.963a12.588 12.588 0 0117.402-18.194l.418.418 39.996 39.996a12.568 12.568 0 010 17.787l-40.04 39.996a12.573 12.573 0 01-17.776-17.776l18.777-18.777a62.645 62.645 0 1051.755 61.93V133.562a12.573 12.573 0 0125.146 0v140.019a88 88 0 11-77.77-89.144l.011.044z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgDock;
