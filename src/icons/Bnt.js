import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBnt = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="bnt_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#000d2b" />
        <Stop offset="100%" stopColor="#0037b7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#bnt_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M241.12 130.68l-49.698 29.117 49.698 29.128 50.633-29.128-50.633-29.117zm8.173 155.474v58.245l67.507-38.511v-58.256l-67.507 38.522zm50.633-108.042v58.256l-50.644 29.128V207.24l50.644-29.128zm-121.902 58.256l50.644 29.128V207.24l-50.644-29.128v58.256zm0 78.914l50.644 29.117v-58.245l-50.644-29.117v58.234z"
    />
  </Svg>
);

export default SvgBnt;
