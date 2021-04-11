import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgAeur = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="aeur_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#051d2d" />
        <Stop offset="100%" stopColor="#126da9" />
      </LinearGradient>
    </Defs>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="aeur_svg__b">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#FFF" stopOpacity={0.83} offset="3%" />
        <Stop stopColor="#FFF" stopOpacity={0.66} offset="7%" />
        <Stop stopColor="#FFF" stopOpacity={0.5} offset="11%" />
        <Stop stopColor="#FFF" stopOpacity={0.37} offset="15%" />
        <Stop stopColor="#FFF" stopOpacity={0.25} offset="19%" />
        <Stop stopColor="#FFF" stopOpacity={0.16} offset="25%" />
        <Stop stopColor="#FFF" stopOpacity={0.09} offset="30%" />
        <Stop stopColor="#FFF" stopOpacity={0.04} offset="37%" />
        <Stop stopColor="#FFF" stopOpacity={0.01} offset="47%" />
        <Stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#aeur_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G transform="matrix(11 0 0 11 165 132)" fill="url(#aeur_svg__b)">
      <Path d="M6.993 13.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 6.951A.049.049 0 107.049 7a.055.055 0 00-.05-.05z" />
      <Path d="M6.993 20.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 13.951a.049.049 0 10.049.049.055.055 0 00-.05-.05z" />
    </G>
  </Svg>
);

export default SvgAeur;
