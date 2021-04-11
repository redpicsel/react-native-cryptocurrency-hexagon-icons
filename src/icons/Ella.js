import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgElla = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="ella_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" />
        <Stop offset="100%" stopColor="#63b946" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#ella_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M264.803 211.332L242 188.54l-22.957 22.946-23.804-23.804L242 121l47.08 66.055zm-53.713 8.118L188.54 242l22.792 22.803-23.716 23.716L121 242l65.89-46.75zm61.424 45.507L295.46 242l-22.704-22.704 24.486-24.486L363 242l-66.484 46.959zm-53.218 7.81L242 295.46l22.55-22.55 24.002 24.013L242 363l-46.244-66.704zM242 203.797L280.192 242 242 280.192 203.808 242z"
      fill="#fff"
    />
  </Svg>
);

export default SvgElla;
