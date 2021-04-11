import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgLun = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="lun_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f55749" />
        <Stop offset="100%" stopColor="#f8897f" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#lun_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M239.943 132.528a4.191 4.191 0 014.092 0l90.475 50.798a3.96 3.96 0 012.046 3.454c0 1.43-.77 2.75-2.035 3.454l-78.705 44.374a18.216 18.216 0 00-10.703-5.94v-24.123c8.525-1.419 15.026-8.635 15.026-17.358 0-9.735-8.096-17.633-18.095-17.633s-18.095 7.898-18.095 17.633c0 8.668 6.435 15.862 14.894 17.336v24.178a18.194 18.194 0 00-10.56 5.896l-78.694-44.187a3.938 3.938 0 01-.011-6.908l90.376-50.941m94.82 63.987a4.169 4.169 0 014.092-.011 3.982 3.982 0 012.057 3.454l.077 98.626c0 1.43-.77 2.739-2.046 3.454l-87.615 49.39c-2.717 1.54-6.127-.385-6.127-3.454l-.077-84.623c4.246-.704 8.096-2.871 10.857-6.105l21.89 12.265a17.16 17.16 0 00-.407 6.908c1.386 9.647 10.549 16.357 20.438 15.004 9.9-1.364 16.786-10.285 15.4-19.932s-10.56-16.357-20.449-14.993a18.084 18.084 0 00-12.342 7.447l-21.45-12.023a16.908 16.908 0 00-.275-12.595l75.988-42.834m-191.697 3.454c0-2.332 1.958-3.993 4.092-3.993.715 0 1.43.187 2.046.55l76.065 42.878a16.979 16.979 0 00-.253 12.54l-21.439 12.023a18.095 18.095 0 00-12.342-7.447c-9.9-1.364-19.041 5.357-20.438 14.993s5.5 18.557 15.4 19.921 19.03-5.357 20.438-14.993a17.16 17.16 0 00-.407-6.919l21.879-12.265c2.739 3.212 6.545 5.368 10.747 6.094l-.066 84.645c0 3.069-3.41 4.983-6.138 3.443l-87.626-49.39a3.96 3.96 0 01-2.046-3.454l.088-98.626"
      fill="#fff"
    />
  </Svg>
);

export default SvgLun;