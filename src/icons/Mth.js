import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgMth = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="mth_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#104fca" />
        <Stop offset="100%" stopColor="#417cef" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#mth_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#fff">
      <Path
        d="M143 171.248l46.574 78.133V330C163.856 330 143 309.804 143 284.889z"
        fillOpacity={0.5}
      />
      <Path
        d="M294.415 249.293l46.552-78.089h.022V284.9c.011 24.904-20.845 45.1-46.574 45.1z"
        fillOpacity={0.6}
      />
      <Path
        d="M241.967 247.038L218.68 286.11c-4.829-1.21-10.021-5.896-15.576-14.047L143 171.248c22.275-12.463 50.765-5.06 63.624 16.5z"
        fillOpacity={0.8}
      />
      <Path d="M277.376 187.66c12.859-21.582 41.349-28.974 63.624-16.511l-60.104 100.815A46.937 46.937 0 01242 292.248a47.63 47.63 0 01-20.9-4.785l-2.42-1.353z" />
    </G>
  </Svg>
);

export default SvgMth;
