import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMnx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="mnx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00adef" />
        <Stop offset="100%" stopColor="#41cafe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#mnx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M229.493 362.846C168.52 356.455 121 304.788 121 242c0-62.788 47.52-114.455 108.493-120.846v37.07A84.7 84.7 0 00157.696 242a84.7 84.7 0 0071.797 83.776v37.07zM253.418 121c57.53 5.269 103.433 50.787 109.428 108.207h-36.993a84.7 84.7 0 00-72.435-71.214V121zM363 253.187c-5.302 58.19-51.524 104.5-109.582 109.813v-36.993a84.7 84.7 0 0072.666-72.82H363z"
    />
  </Svg>
);

export default SvgMnx;
