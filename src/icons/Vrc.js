import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgVrc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="vrc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#418bca" />
        <Stop offset="100%" stopColor="#79add9" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#vrc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M288.915 154H341l-99 198-99-198h51.744l47.597 100.243zM242 208.549c-8.668 0-15.697-7.216-15.697-16.115s7.029-16.126 15.697-16.126 15.697 7.227 15.697 16.126-7.04 16.115-15.697 16.115zm71.115 44.44c8.668 0 15.697 7.227 15.686 16.126 0 8.91-7.018 16.115-15.686 16.115s-15.697-7.216-15.697-16.115S304.447 253 313.115 253z"
      fill="#fff"
    />
  </Svg>
);

export default SvgVrc;
