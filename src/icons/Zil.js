import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgZil = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="zil_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#49c1bf" />
        <Stop offset="100%" stopColor="#7fd3d2" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#zil_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#fff">
      <Path
        d="M165 146.091l122.254 59.213 31.295-14.102L196.801 132z"
        fillOpacity={0.304}
      />
      <Path
        d="M287.254 205.161l31.295-14.091v31.515l-31.295 14.091zm0 146.124v-98.307l31.295-14.245v98.461z"
        fillOpacity={0.646}
      />
      <Path d="M165 146.124v31.867l84.623 41.107L165 261.008v31.416l122.254 59.103v-31.614l-83.028-40.381 83.028-42.691v-31.515z" />
    </G>
  </Svg>
);

export default SvgZil;
