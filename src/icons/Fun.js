import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgFun = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="fun_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#ed1968" />
        <Stop offset="100%" stopColor="#f25e95" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#fun_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M205.7 361.9a106.48 106.48 0 01-38.5-19.8 127.16 127.16 0 01-28.6-30.8 123.53 123.53 0 01-17.6-40.7 122.1 122.1 0 010-52.8 144.21 144.21 0 0116.5-41.8 113.52 113.52 0 0146.2-41.8 119.24 119.24 0 0120.9-8.8c11 13.2 22 27.5 33 41.8 1.1 2.2 3.3 3.3 4.4 5.5a84.7 84.7 0 00-31.9 7.7 75.24 75.24 0 00-23.1 18.7 92.62 92.62 0 00-14.3 27.5 67.87 67.87 0 001.1 36.3l47.3-37.4c11 14.3 22 27.5 33 41.8-15.4 12.1-31.9 24.2-47.3 37.4 15.4 19.8 31.9 40.7 47.3 61.6a117.48 117.48 0 01-48.4-4.4zm104.83-133.254a67.87 67.87 0 00-1.43-5.346c-1.485 1.166-34.21 26.18-47.3 37.4-11-14.3-22-27.5-33-41.8 15.4-12.1 31.9-24.2 47.3-37.4-15.4-19.8-30.8-39.6-47.3-60.5 0-1.1-1.1-1.1-1.1-2.2h15.4a121 121 0 0177 28.6 118.8 118.8 0 0126.4 30.8 100.1 100.1 0 0115.4 41.8 135.85 135.85 0 01-1.1 51.7 108.68 108.68 0 01-17.6 39.6 118.03 118.03 0 01-27.5 29.7 96.47 96.47 0 01-36.3 19.8c-9.9-12.1-18.7-23.1-27.5-35.2a83.93 83.93 0 01-8.8-12.1 67.76 67.76 0 0053.9-26.4 71.17 71.17 0 0013.2-27.5c2.046-8.349 2.156-18.667.33-30.954zm-51.953 92.103a686.51 686.51 0 0023.65 30.47 89.573 89.573 0 0028.468-16.775 110.55 110.55 0 0025.784-27.94 100.386 100.386 0 0016.258-36.542c3.454-15.972 3.795-32.461.99-48.906a92.312 92.312 0 00-14.311-38.632 110.693 110.693 0 00-24.64-28.721 112.706 112.706 0 00-70.697-26.642c10.197 12.98 20.526 26.213 38.533 49.379l4.84 6.204-5.984 5.115a619.586 619.586 0 01-23.958 19.371c-.77.605-10.12 7.788-17.138 13.222 2.893 3.685 6.248 7.887 11.374 14.3 5.06 6.325 8.415 10.538 11.308 14.223 5.104-4.213 10.67-8.635 17.336-13.805 1.078-.836 18.656-14.366 23.617-18.26l9.416-7.403 3.553 11.44a76.054 76.054 0 011.254 40.645 79.354 79.354 0 01-14.696 30.646 76.01 76.01 0 01-45.353 28.149l.396.462z"
      fill="#fff"
    />
  </Svg>
);

export default SvgFun;