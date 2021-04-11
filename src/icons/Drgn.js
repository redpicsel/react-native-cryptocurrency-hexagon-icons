import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgDrgn = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="drgn_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#c91111" />
        <Stop offset="100%" stopColor="#ef4242" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#drgn_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        opacity={0.6}
        d="M169.4 294.58h30.998l-.792-80.597L315.04 360.536l-.363-173.052h-30.514l.792 81.411-115.511-146.938z"
      />
      <Path d="M169.4 175.483l.176-53.361 145.013 184.272.605 54.362z" />
    </G>
  </Svg>
);

export default SvgDrgn;
