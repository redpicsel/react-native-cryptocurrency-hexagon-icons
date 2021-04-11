import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTaas = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="taas_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#002342" />
        <Stop offset="100%" stopColor="#0069c7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#taas_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M110 209h14.278v13.431H110V209zm14.278 52.514h41.547V275H110v-39.138h41.91v13.42h-27.621v12.232zm193.897-25.652H374V275h-41.91v-13.486h27.632v-12.221h-41.547v-13.431zm41.778-12.782h-41.8v-13.431h41.8v13.42zm-180.521 12.782h55.825v26.224h-13.904V275h-41.921v-39.138zm41.547 25.652v-12.221H193.71v12.21h27.28zM179.432 209h55.825v13.431h-55.825V209zm69.674 26.862h55.825v26.224h-13.904V275h-41.91v-39.138zm41.492 25.652v-12.221h-27.28v12.21h27.28zM249.106 209h55.825v13.431h-55.825V209z"
    />
  </Svg>
);

export default SvgTaas;
