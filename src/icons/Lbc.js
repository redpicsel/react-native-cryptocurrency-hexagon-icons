import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgLbc = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="lbc_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#006149" />
        <Stop offset="100%" stopColor="#00dca6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#lbc_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M331.936 255.024l-8.767-2.189 2.662-10.67 27.335 6.831-6.82 27.335-10.681-2.662 2.365-9.482-97.592 60.423-108.229-54.076v-41.272l112.464-70.334 103.125 50.303v16.984l-107.349 66.693-79.717-39.523 4.884-9.856 74.239 36.806 96.943-60.236v-3.993l-91.465-44.616-102.113 63.866v28.38l96.657 48.29z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLbc;
