import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgStrat = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="strat_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1387c9" />
        <Stop offset="100%" stopColor="#45b0ed" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#strat_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M242.583 268.103l105.534-61.424-105.534-62.524-104.478 62.524 104.478 61.424zm-110.066-32.12a8.36 8.36 0 004.136 7.227l105.897 61.688 107.635-63.668a8.129 8.129 0 0112.199 7.04v28.886a8.173 8.173 0 01-3.971 7.007l-111.727 66.693a8.052 8.052 0 01-8.206.033l-114.62-67.386a5.83 5.83 0 01-2.079-7.931 5.731 5.731 0 017.876-2.09l112.893 66.363 108.317-64.658v-20.9L246.664 315.92a8.052 8.052 0 01-8.162.033l-107.613-62.7a19.965 19.965 0 01-9.889-17.27V208.78a6.941 6.941 0 0110.417-6.028l6.688 3.927-8.404 5.027a5.731 5.731 0 01-8.624-4.004 5.819 5.819 0 012.75-5.962l114.609-68.596a8.052 8.052 0 018.25-.022l112.321 66.55a8.184 8.184 0 01-.055 14.091L246.62 279.147a8.052 8.052 0 01-8.14-.011l-112.86-66.363a4.565 4.565 0 006.688-2.629 4.653 4.653 0 00.22-1.364v27.214z"
    />
  </Svg>
);

export default SvgStrat;