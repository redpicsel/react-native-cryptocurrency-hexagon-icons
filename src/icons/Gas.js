import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgGas = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="gas_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#58bf00" />
        <Stop offset="100%" stopColor="#86fe1f" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#gas_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M341 314.38l-76.89-35.838v-79.42L341 171.853V314.38zM229.053 352L154 317.031V175.538l75.053 34.98V352zm110.11-185.273l-1.243.44-73.81 26.191-1.848.66-31.273 11.088-74.03-34.496 105.303-37.356.924-.33 1.947-.693.682-.231 74.03 34.496-.693.231z"
    />
  </Svg>
);

export default SvgGas;
