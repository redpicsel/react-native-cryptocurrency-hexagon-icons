import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgHight = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="hight_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#117fc0" />
        <Stop offset="100%" stopColor="#3daced" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#hight_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M357.456 179.652l-93.005 153.34h-55.462l42.625-70.367h-42.361l-49.39 81.444a130.955 130.955 0 00197.56-164.34l.033-.077zm-81.202-27.522l-40.37 66.44H278.3l47.014-77.539a130.955 130.955 0 00-197.56 164.34l92.972-153.23h55.517z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgHight;
