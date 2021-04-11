import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgIotx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="iotx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00d4d5" />
        <Stop offset="100%" stopColor="#2ffeff" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#iotx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M247.709 121v60.027l52.118-29.975z" />
      <Path opacity={0.9} d="M299.827 151.052v60.027l52.107-30.052z" />
      <Path
        opacity={0.8}
        d="M247.709 181.027v60.027l52.118-29.975zm52.118 30.063v60.016l52.107-30.052zM247.709 241.054v60.027l52.118-29.975z"
      />
      <Path d="M299.827 271.106v60.027l52.107-30.052z" />
      <Path opacity={0.4} d="M113.003 179.003v60.027l52.118-30.052z" />
      <Path opacity={0.2} d="M178.75 201.322v60.027l52.03-29.975z" />
      <Path opacity={0.3} d="M140.118 239.283v60.027l52.107-30.052z" />
      <Path opacity={0.9} d="M174.46 284.581v60.027l52.03-30.052z" />
      <Path opacity={0.7} d="M247.28 310.42v60.038l52.03-30.063z" />
      <Path opacity={0.9} d="M187.429 171.677v60.038l52.03-29.975z" />
      <Path opacity={0.8} d="M247.709 121v60.027l-52.118-29.975z" />
      <Path
        opacity={0.6}
        d="M187.429 146.52v60.016L135.3 176.484zM239.547 176.22v60.038l-52.118-30.063z"
      />
      <Path opacity={0.95} d="M178.508 201.322v60.027l-52.118-29.975z" />
      <Path opacity={0.6} d="M247.709 241.054v60.027l-52.03-29.975z" />
      <Path opacity={0.55} d="M140.118 255.035v60.027L88 284.999z" />
      <Path d="M351.934 181.027v60.027l-52.107-29.975z" />
      <Path opacity={0.95} d="M299.827 211.09v60.016l-52.118-30.052z" />
      <Path opacity={0.9} d="M351.934 241.054v60.027l-52.107-29.975z" />
      <Path opacity={0.7} d="M299.827 271.106v60.027l-52.118-30.052z" />
      <Path opacity={0.4} d="M236.17 296.12v60.027l-52.107-29.975z" />
      <Path d="M299.827 151.052v60.027l-52.118-30.052z" />
    </G>
  </Svg>
);

export default SvgIotx;
