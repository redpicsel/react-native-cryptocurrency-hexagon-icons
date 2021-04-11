import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXpa = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xpa_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#4fa784" />
        <Stop offset="100%" stopColor="#81c3a9" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xpa_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M347.325 207.306l-89.21-25.564-30.514 51.975-35.442-41.107 16.06-2.068 16.555 19.448 18.37-32.549-80.85-23.177a6.446 6.446 0 00-8.096 7.7L190.014 305.8l38.467-64.768 35.442 41.107-16.06 2.068-16.544-19.448-36.41 60.687 5.39 21.67a6.49 6.49 0 0010.78 3.08l138.93-132.11a6.38 6.38 0 00-2.684-10.78z"
    />
  </Svg>
);

export default SvgXpa;
