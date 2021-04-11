import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgKmd = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="kmd_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2b6680" />
        <Stop offset="100%" stopColor="#4d9fc3" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#kmd_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#fff">
      <Path d="M108 240a132 132 0 10264 .508v-1.012a132.7 132.7 0 00-3.612-30.164 14.16 14.16 0 10-27.544 6.56 103.736 103.736 0 11-76.788-76.744 14.16 14.16 0 006.56-27.544A131.984 131.984 0 00108 240" />
      <Path d="M306.72 143.448c-.192.18-.316.392-.496.584a20.872 20.872 0 00-5.608 12.48v2.244c0 .52-.112 1.02-.168 1.536a37.7 37.7 0 01-48.94 32.212 48.56 48.56 0 00-44.592 11.64c-.48.448-1.008.828-1.48 1.3a48.843 48.843 0 0069.072 69.076 47.74 47.74 0 005.472-6.66 48.82 48.82 0 007.472-39.252 37.496 37.496 0 01-.72-2.66c0-.132-.08-.256-.112-.392a37.712 37.712 0 0133.588-46.06c.28 0 .552-.08.832-.088.796 0 1.592-.092 2.388-.092h.192a20.896 20.896 0 0012.896-6.068 21.623 21.623 0 002.24-2.736 21.04 21.04 0 00-32.028-27.048" />
    </G>
  </Svg>
);

export default SvgKmd;