import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgAuto = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="auto_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#fab431" />
        <Stop offset="100%" stopColor="#fbca6e" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#auto_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M335.5 277.937l-46.035-27.621 5.28-21.879 19.657 11.605V200.09l-63.14-37.642v86.9l-15.015 8.305 82.918 49.17L242 352l-93.5-54.758V187.737L242 132l93.5 55.737v90.2zM169.598 200.09v71.258l60.698-35.2V163.9l-60.698 36.179zm45.067 69.784l-34.518 21.109L242 327.195l34.925-20.46-62.26-36.872z"
    />
  </Svg>
);

export default SvgAuto;
