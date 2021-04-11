import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTbx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="tbx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#5244d4" />
        <Stop offset="100%" stopColor="#857ce0" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#tbx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M238.7 367.4c-71.082 0-128.7-57.618-128.7-128.7S167.618 110 238.7 110s128.7 57.618 128.7 128.7-57.618 128.7-128.7 128.7zm31.79-84.7l-31.79-44-31.79 44-25.85-44 28.82-49.28h57.64l28.82 49.28-25.85 44zm9.46-114.4h-82.5l-41.14 70.4 41.25 70.4h82.39l41.14-70.4-41.14-70.4z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgTbx;
