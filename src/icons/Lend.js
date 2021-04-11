import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgLend = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="lend_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0fa9c9" />
        <Stop offset="100%" stopColor="#3fd2f0" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#lend_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M254.617 290.906L194.667 352l-17.094-18.755 41.547-42.35L176 246.972l18.403-18.766zm34.98-35.101L308 237.039l-43.12-43.945 41.547-42.339L289.333 132l-60.214 61.094zm-87.56-34.837l60.478 62.7 18.403-18.755-60.478-61.633z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLend;
