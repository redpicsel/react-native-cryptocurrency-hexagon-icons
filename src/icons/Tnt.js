import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTnt = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="tnt_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ff4081" />
        <Stop offset="100%" stopColor="#ff79a6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tnt_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M218.79 302.533L220.528 341s20.625-3.498 42.108 0l1.716-38.467zM193.886 272.8s60.159-5.247 95.392 0l3.432-41.965a650.199 650.199 0 00-100.54 0zM352 164.384s-115.159-24.486-220 1.749l7.733 48.081 9.46-18.359s98.824-14.861 187.33 0l8.602 18.37z"
      fill="#fff"
    />
  </Svg>
);

export default SvgTnt;
