import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgVia = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="via_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#565656" />
        <Stop offset="100%" stopColor="#888" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#via_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M188.463 223.256h-34.408v-18.909h27.17l-20.845-54.45L177.584 143l39.05 101.937 50.611.33L306.416 143l17.215 6.897-20.856 54.45h27.17v18.92h-34.408l-8.481 22.11 42.944.275-.11 18.909-50.05-.319L242 363l-38.016-99.231-49.984-.33.11-18.898 42.614.275zm35.42 40.634L242 311.168l18.018-47.047z"
      fill="#fff"
    />
  </Svg>
);

export default SvgVia;
