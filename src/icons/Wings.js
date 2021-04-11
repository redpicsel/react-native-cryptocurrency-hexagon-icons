import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgWings = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="wings_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0dc9f7" />
        <Stop offset="100%" stopColor="#55d9f9" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#wings_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#fff">
      <Path
        d="M273.944 239.129l-33.495 26.004-13.717-47.575-79.464-21.285 104.291 5.357z"
        fillOpacity={0.305}
      />
      <Path
        d="M156.97 329.923L336.446 190.63 352 225.236l-20.405-5.643-.715 35.904z"
        fillOpacity={0.7}
      />
      <Path d="M316.756 261.58l-52.217-89.771L132 165l101.013 27.071 27.39 93.39z" />
    </G>
  </Svg>
);

export default SvgWings;
