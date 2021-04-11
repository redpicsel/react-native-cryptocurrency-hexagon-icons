import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXdn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xdn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#4f7aa2" />
        <Stop offset="100%" stopColor="#80a2c1" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xdn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M212.399 198h30.118c14.542 0 40.513 8.833 40.513 44s-25.96 44-40.513 44H212.41zm16.61 70.18h12.474c10.384 0 22.847-6.358 22.847-26.18s-12.463-26.18-22.847-26.18H229.02zM294.47 198h6.226l56.078 77.286V198H363v88h-6.237l-56.078-75.592V286h-6.237zM121 198h20.768v22H121zm31.163 0h20.757v22h-20.757zm31.152 0h20.779v22h-20.779zm0 33h20.779v22h-20.779zm0 33h20.779v22h-20.779zm-31.152-33h20.757v22h-20.757z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXdn;
