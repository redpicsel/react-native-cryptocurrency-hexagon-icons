import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgLink = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="link_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#01a6fb" />
        <Stop offset="100%" stopColor="#4bc1fe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#link_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M231 270.798V297a11 11 0 0022 0v-26.202a16.5 16.5 0 10-22 0zM176 220v-22a66 66 0 11132 0v22a11 11 0 0111 11v88a11 11 0 01-11 11H176a11 11 0 01-11-11v-88a11 11 0 0111-11zm132 0H203.5v-20.9c0-21.868 17.237-39.6 38.5-39.6s38.5 17.732 38.5 39.6V220H242z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLink;
