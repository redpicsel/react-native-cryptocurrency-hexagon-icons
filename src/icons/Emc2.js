import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgEmc2 = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="emc2_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#0cf" />
        <Stop offset="100%" stopColor="#4cdbfe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#emc2_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path
        fillOpacity={0.4}
        d="M152.834 276.771h48.367L180.378 319H132l20.834-42.229zm27.555-55.88h48.378L208.01 263.01h-48.4l20.79-42.13zm27.566-55.88h48.378l-20.779 42.13h-48.367L207.955 165z"
      />
      <Path
        fillOpacity={0.6}
        d="M201.047 276.76h48.378l-20.834 42.218h-48.378l20.834-42.229zm27.566-55.88h48.367l-20.768 42.108h-48.378l20.779-42.108zM256.168 165h48.378l-20.779 42.119H235.4L256.168 165z"
      />
      <Path d="M248.49 276.76h48.378l-20.823 42.218h-48.378l20.834-42.229zm27.566-55.88h48.378l-20.768 42.108h-48.378l20.768-42.108zM303.622 165H352l-20.779 42.119h-48.367L303.622 165z" />
    </G>
  </Svg>
);

export default SvgEmc2;
