import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGame = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="game_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#2d475b" />
        <Stop offset="100%" stopColor="#5281a6" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#game_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M207.559 205.535h121.935v27.368H207.559zm121.935 45.584H330v71.973s-95.117 68.915-168.993-6.072c0 0-40.48-41.052-25.806-100.848 0 0 11.638-74.481 100.188-83.6 0 0 54.637-7.612 90.057 32.934l-21.252 20.768s-45.034-46.618-105.237-10.12c0 0-49.082 27.357-28.842 96.272 0 0 22.264 59.796 92.081 47.63 0 0 23.782-5.412 35.926-15.884v-25.685H207.57v-27.368z"
      fill="#fff"
    />
  </Svg>
);

export default SvgGame;
