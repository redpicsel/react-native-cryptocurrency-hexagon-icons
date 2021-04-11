import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMatic = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="matic_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2b6def" />
        <Stop offset="100%" stopColor="#6a98f3" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#matic_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M320.008 144l-39.952 23.036h-.04v46.076l-.14.02L160.004 144l-39.984 23.04-.02-.008V310.28l39.98 23.052.024-.184v.172L200 310.28v-51.04l39.912 23 .024.048.032-.02 40.056-22.928v50.96l39.812 22.944v.12l.1-.06.072.04.056-.112 39.76-22.908V167.16l.18-.104L320.008 144z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMatic;
