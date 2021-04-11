import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgTrig = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="trig_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#30c0f2" />
        <Stop offset="100%" stopColor="#6ed2f5" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#trig_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M177.353 143h129.514s3.432 17.094 21.78 18.238c0 0 60.742 141.35-87.109 201.762 0 0-136.389-43.318-88.253-200.618 0 0 20.636-1.144 24.068-19.382zm122.65 11.253h-115.72l-.154 2.464c-.968 5.379-3.663 9.13-7.612 11.66a20.79 20.79 0 01-8.052 2.981l-2.024.198-.572 1.958c-10.659 36.41-11.022 67.87-2.629 94.71 6.886 22 19.349 40.04 35.772 54.45a137.28 137.28 0 0028.545 19.283c3.41 1.727 6.6 3.146 9.449 4.29a68.908 68.908 0 003.685 1.375l1.078.33 1.045-.44c40.766-17.424 65.428-43.758 76.472-76.56 9.13-27.06 8.316-55.869 1.507-83.149a156.475 156.475 0 00-4.73-15.466 46.992 46.992 0 00-.462-1.199l-.704-1.738-1.881-.121c-5.346-.352-8.745-2.53-10.846-6.028a15.037 15.037 0 01-2.035-6.16zm-110.495 5.995c70.037.011 105.05.022 105.05.033a21.438 21.438 0 002.42 6.05c2.816 4.675 7.337 7.832 13.673 8.734a150.524 150.524 0 014.29 14.19c6.556 26.268 7.326 53.966-1.375 79.794-10.395 30.877-33.506 55.737-72.061 72.49a112.398 112.398 0 01-11.209-4.939 131.296 131.296 0 01-27.291-18.414c-15.631-13.728-27.467-30.844-34.001-51.733-7.898-25.245-7.689-54.923 2.134-89.474a28.116 28.116 0 008.635-3.564 22.33 22.33 0 009.735-13.167zm80.96 61.402h-3.333c.33-6.688-1.155-21.252-19.25-25.3a28.732 28.732 0 00-15.884.726c-7.062 2.508-15.488 8.811-15.807 24.574h-2.453a9.46 9.46 0 00-9.46 9.405v39.325a9.46 9.46 0 009.46 9.405h56.738a9.46 9.46 0 009.46-9.405v-39.325a9.46 9.46 0 00-9.46-9.405zm-22.055 44.462h-12.606l3.333-16.577a7.403 7.403 0 012.97-14.201 7.403 7.403 0 112.97 14.201zm-24.068-44.462c.308-5.148 2.486-17.336 16.049-18.238 0 0 17.886-.979 17.567 18.238z"
      fill="#fff"
    />
  </Svg>
);

export default SvgTrig;