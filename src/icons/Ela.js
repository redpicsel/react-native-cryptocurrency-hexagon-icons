import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgEla = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ela_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#3fbadf" />
        <Stop offset="100%" stopColor="#78cee8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ela_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        fillOpacity={0.4}
        d="M187 309.309l55-31.02v61.985l-55-30.965zm0-99l55-31.02v61.985l-55-30.965z"
      />
      <Path
        fillOpacity={0.7}
        d="M352 277.53l-55 31.746V246.73l55 30.8zm0-99l-55 31.746V147.73l55 30.8z"
      />
      <Path
        fillOpacity={0.8}
        d="M187 309.276v-62.513l55 31.57-55 30.943zm0-99v-62.513l55 31.57-55 30.943z"
      />
      <Path d="M297 309.276l-55-30.932 55-31.614v62.546zm0-99l-55-30.932 55-31.614v62.546z" />
      <Path
        fillOpacity={0.6}
        d="M297 309.276l-55 30.998v-61.93l55 30.932zm0-99l-55 30.998v-61.93l55 30.932z"
      />
      <Path
        fillOpacity={0.5}
        d="M187 246.763v62.513l-55-31.735 55-30.778zm0-99v62.513l-55-31.735 55-30.778z"
      />
    </G>
  </Svg>
);

export default SvgEla;
