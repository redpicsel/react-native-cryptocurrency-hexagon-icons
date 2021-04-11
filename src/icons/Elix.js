import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgElix = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="elix_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00aded" />
        <Stop offset="100%" stopColor="#3fcbff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#elix_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#fff">
      <Path d="M177.067 325.633l.022-.044 35.068-83.776-35.09-83.765 64.735 83.765-64.691 83.765zm129.536 0l-.044-.055-64.691-83.765 64.735-83.765-35.09 83.765 35.068 83.776z" />
      <Path
        d="M241.835 241.824v58.366l-64.79 25.41 64.79-83.82v-58.366l64.79-25.41z"
        fillOpacity={0.8}
      />
      <Path
        d="M241.835 300.19v51.161l-64.79-25.784 64.79-25.465v-58.278l-64.79-83.82 64.79 25.41v-51.161l64.79 25.773-64.79 25.465v58.289l64.79 83.82z"
        fillOpacity={0.5}
      />
      <Path
        d="M177.045 158.026l64.79-25.773v51.238zm129.58 167.541l-64.79 25.784v-51.249z"
        fillOpacity={0.145}
      />
    </G>
  </Svg>
);

export default SvgElix;
