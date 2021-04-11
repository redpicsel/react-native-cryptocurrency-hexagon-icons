import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

const SvgSafe = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="safe_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#00688c" />
        <Stop offset="100%" stopColor="#00bafb" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#safe_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <G fill="#FFF">
      <Path d="M362.879 315.381V175.978L241.835 106.26l-.165.088-120.626 69.707v139.37l120.725 69.542.011.011 121.088-69.586zm-53.57-22.286l-20.647-11.836L242.594 308a.869.869 0 01-.88 0l-52.855-30.635-.022-53.295-46.431-26.62 98.978-58.025a.253.253 0 01.264 0l91.927 52.558-16.258 9.405-75.625-43.516-67.067 39.369 23.265 13.365 43.846-25.498.022-.022 53.57 30.635-.022 50.71 45.661 26.147-.011.77-99.176 57.904-91.938-52.492 16.093-9.427 75.691 43.417 67.683-39.666z" />
      <Path d="M256.355 232.595v-.374l-.011-.242-.011-.132-.022-.275v-.088l-.033-.297v-.077l-.044-.308v-.055l-.044-.319v-.044l-.055-.33-.011-.022-.066-.33-.011-.033-.077-.33v-.022a3.894 3.894 0 00-.077-.33v-.022l-.099-.33v-.011l-.099-.352a5.291 5.291 0 00-.22-.66v-.011l-.132-.33a5.335 5.335 0 00-.132-.33l-.143-.33-.143-.308-.154-.33-.154-.308-.176-.308a12.133 12.133 0 01-.176-.297v-.011l-.176-.286-.011-.011a5.258 5.258 0 00-.187-.275v-.022l-.187-.264s0-.022-.022-.022l-.187-.264-.022-.022c-.066-.088-.11-.176-.187-.264l-.011-.022-.209-.253-.022-.022-.198-.242-.022-.022-.22-.231a.11.11 0 01-.022-.033l-.209-.231a.11.11 0 01-.022-.033l-.209-.22a40303.912 40303.912 0 00-.253-.253l-.033-.033-.22-.22a476.982 476.982 0 01-.253-.22l-.033-.033a5.808 5.808 0 00-.231-.209l-.033-.033a4.73 4.73 0 00-.231-.187l-.033-.022-.242-.198-.033-.022-.253-.187-.033-.022-.253-.187-.033-.022-.253-.176-.033-.011-.264-.176-.022-.022-.275-.165h-.022l-.286-.176h-.022l-.297-.176h-.011a14.762 14.762 0 00-12.573 26.686l-6.38 29.172h24.134l-6.435-29.15a14.83 14.83 0 009.119-13.673z" />
    </G>
  </Svg>
);

export default SvgSafe;