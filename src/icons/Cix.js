import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgCix = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="cix_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0576b4" />
        <Stop offset="100%" stopColor="#21acf8" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#cix_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M337.348 273.493l-11.649-7.293 25.41-.297.528-.286v.275l10.494-.11-17.809 28.974-1.595-13.97-81.004 44.693L231 284.46l-86.13 45.386v-10.34l88.803-46.783 30.712 41.019 72.974-40.249zm-111.232-9.955l-33.66 17.721V161.084h33.66v102.454zm95.183 5.291l-33.66 18.7V161.084h33.66v107.745z" />
      <Path
        d="M273.713 295.273l-7.227 4.004-26.444-35.31v-89.133h33.66v120.439zm-95.194-6.677l-33.66 17.732V190.432h33.66v98.164z"
        opacity={0.5}
      />
    </G>
  </Svg>
);

export default SvgCix;
