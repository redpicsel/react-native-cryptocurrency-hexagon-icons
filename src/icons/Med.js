import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMed = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="med_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00b0ff" />
        <Stop offset="100%" stopColor="#4cc7fe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#med_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M330 198.671v98.065l-27.896 16.28v-65.45L242 283.536l-60.104-36.003v65.483L154 296.736V198.66l88 52.855 88-52.855zm-87.67 122.287l25.74-15.389 25.41 15.389L242.33 352l-51.128-31.042 25.41-15.389 25.729 15.389zm50.82-157.916l-25.421 15.389L242 163.042l-25.729 15.389-25.41-15.389L242 132l51.15 31.042z"
    />
  </Svg>
);

export default SvgMed;
