import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgIcx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="icx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1fc5c9" />
        <Stop offset="100%" stopColor="#56e1e4" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#icx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M190.256 313.192l23.804-23.804a55 55 0 0075.328-75.328l23.804-23.804a88 88 0 01-122.936 122.936zm-19.448-19.448a88 88 0 01122.936-122.936l-23.804 23.804a55 55 0 00-75.328 75.328zM330 176a22 22 0 110-44 22 22 0 010 44zM154 352a22 22 0 110-44 22 22 0 010 44z"
      fill="#fff"
    />
  </Svg>
);

export default SvgIcx;
