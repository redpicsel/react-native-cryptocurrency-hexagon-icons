import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTheta = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="theta_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2ab8e6" />
        <Stop offset="100%" stopColor="#69cded" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#theta_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M186.56 132h110.88L308 142.923v198.154L297.44 352H186.56L176 341.077V142.923zm10.56 198.143h89.76V153.857h-89.76zm78.474-56.87h-22.957v24.893h-20.724v-24.882h-22.957v-21.439h66.638zm0-61.402v21.428h-66.638v-21.428h22.957v-24.893h20.724v24.893z"
      fill="#fff"
    />
  </Svg>
);

export default SvgTheta;
