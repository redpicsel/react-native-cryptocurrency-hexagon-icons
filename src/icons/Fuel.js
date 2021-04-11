import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgFuel = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="fuel_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#4096d0" />
        <Stop offset="100%" stopColor="#79b5de" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#fuel_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M346.852 176h-71.445l-21.186 53.13h-66.814v-27.357h66.814L264 176H162.822a4.73 4.73 0 00-4.752 4.697v48.422h-16.28L132 254.881h26.07v48.367c0 2.618 2.156 4.752 4.818 4.752h48.961l9.779-25.751h-34.221V254.87h55.407L221.628 308h32.593l22.814-53.13h70.18c2.64 0 4.785-2.112 4.785-4.719v-69.08a5.115 5.115 0 00-5.148-5.071zm-22.55 49.06c0 2.244-1.837 4.07-4.114 4.07h-33.374l11.407-27.346h21.945a4.103 4.103 0 014.147 4.048z"
      fill="#fff"
    />
  </Svg>
);

export default SvgFuel;
