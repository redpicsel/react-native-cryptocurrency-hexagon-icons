import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgHtml = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="html_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#cfa967" />
        <Stop offset="100%" stopColor="#ddc294" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#html_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M242.22 252.395v87.923l65.417-17.622 15.367-169.29H242.22v71.852l3.344-10.417h8.756zm-81.224 82.764L143 137.5h198l-17.996 197.659L241.78 357.5zm56.793-74.723v-8.151l-27.159-10.824 27.17-10.89v-8.162l-38.797 15.763v6.512zm87.263-15.752l-38.797 15.752v-8.151l27.17-10.857-27.17-10.857v-8.162l38.797 15.763zm-62.832 7.7v-27.126l-14.487 45.177h8.668z"
      fill="#fff"
    />
  </Svg>
);

export default SvgHtml;
