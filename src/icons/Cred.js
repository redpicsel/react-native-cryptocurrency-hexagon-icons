import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgCred = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="cred_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#37e8a3" />
        <Stop offset="100%" stopColor="#72eebe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#cred_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M199.496 241.626l38.302 38.423 100.43-101.101L352 192.918 237.798 308l-52.085-52.393zm23.21-3.41L284.504 176l13.783 13.97-61.787 62.26zm-25.036 53.13l-13.596 13.706L132 252.67l13.761-13.97z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCred;
