import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgPivx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="pivx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#5e4778" />
        <Stop offset="100%" stopColor="#8d72ab" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#pivx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      stroke="#FFF"
      d="M181.5 200.651h67.683v13.805H181.5v-13.805zm132 6.49c0 32.714-23.21 53.845-55.308 53.845H213.73V330h-17.6v-84.623h59.675c23.925 0 39.545-14.212 39.545-38.236 0-23.738-15.62-37.543-39.27-37.543h-18.568l-44.473.143V154h65.01c32.23 0 55.44 20.427 55.44 53.141h.011z"
      strokeWidth={11}
    />
  </Svg>
);

export default SvgPivx;
