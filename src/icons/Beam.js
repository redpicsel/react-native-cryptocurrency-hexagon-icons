import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBeam = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="beam_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0b76ff" />
        <Stop offset="100%" stopColor="#549ffe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#beam_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M364.76 205.26v-24.2L286 226.93l-48.62-83.82v55l24.75 42.9-10.01 5.94-14.74-25.96-15.84 28.16-11-4.51 26.84-46.53v-55l-53.24 90.64L110 203.06v28.05l66 16.28-41.8 71.72h103.18v-29.59h-52.69l19.69-34.54 11.88 2.97-11.88 20.9h66l-9.9-17.49 13.09-.99 16.83 29.15h-53.02v29.59H341l-35.64-60.83 59.84-4.4v-24.31l-67.32 16.61 67.21-17.27v-22l-72.93 29.59 72.6-31.24zm-95.7 47.85l-11.88 2.97 11.66-2.97h.22zm-3.74-6.6l-11 4.4 11-4.51v.11z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgBeam;
