import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXrp = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xrp_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#23292f" />
        <Stop offset="100%" stopColor="#596978" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xrp_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M319.77 154h31.79l-66.165 65.527a61.831 61.831 0 01-86.79 0L132.385 154h31.845l50.27 49.753a39.116 39.116 0 0054.956 0L319.77 154zM163.845 336.193H132l66.605-65.923a61.831 61.831 0 0186.79 0L352 336.182h-31.845L269.5 286a39.116 39.116 0 00-54.956 0l-50.71 50.193z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgXrp;
