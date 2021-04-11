import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgAct = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="act_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#767dff" />
        <Stop offset="100%" stopColor="#9fa3ff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#act_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M217.47 137.5h49.06a9.57 9.57 0 018.349 4.884l75.966 135.509a9.57 9.57 0 010 9.35l-24.31 43.362a9.57 9.57 0 01-8.338 4.895H165.803a9.57 9.57 0 01-8.349-4.895l-24.299-43.362a9.57 9.57 0 010-9.35l75.966-135.509a9.57 9.57 0 018.349-4.884zM242 191.411l-51.183 91.157h102.366L242 191.411z"
    />
  </Svg>
);

export default SvgAct;
