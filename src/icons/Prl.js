import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgPrl = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="prl_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#1061e3" />
        <Stop offset="100%" stopColor="#508ef2" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#prl_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      xmlns="http://www.w3.org/2000/svg"
      d="M333.091 295.537c.924 9.471-2.035 18.821-11.198 24.893-4.389 2.915-9.284 4.07-14.542 4.07-43.56-.022-87.12-.011-130.68-.022a53.13 53.13 0 01-2.86-.077c-9.548-.517-18.568-7.436-21.648-16.467-1.364-3.993-1.573-8.085-1.408-12.397h26.51c2.552-.011 4.246-1.87 3.674-4.191a5.5 5.5 0 00-1.529-2.343c-10.813-10.802-21.659-21.56-32.494-32.34l-9.922-9.878c-3.729-3.685-5.522-8.14-4.862-13.332.33-2.552 1.155-5.06 1.98-7.524a111.122 111.122 0 0121.637-37.95 112.948 112.948 0 0151.502-34.045 109.461 109.461 0 0140.392-5.247c32.296 1.936 59.191 15.07 80.509 39.281a108.471 108.471 0 0123.21 42.999c1.65 5.929.088 11.264-4.301 15.631-8.25 8.228-16.566 16.39-24.849 24.585-6.083 6.017-12.155 12.056-18.227 18.095-2.002 1.98-1.804 4.62.484 5.797.66.33 1.485.44 2.233.44 8.36.033 16.731.022 25.102.022zm-174.229 5.94c.121 3.542 1.067 6.688 3.135 9.438 3.432 4.576 8.063 6.732 13.805 6.721H308.11c.517 0 1.034-.022 1.54-.055a15.851 15.851 0 0012.353-6.71c2.046-2.75 3.003-5.896 3.058-9.383zM271.81 216.26c.319.209.55.33.737.473 10.868 8.096 17.754 18.7 20.372 31.977 1.43 7.216 1.232 14.41-.462 21.571a51.216 51.216 0 01-8.25 18.073 3.905 3.905 0 00-.748 3.322c.759 2.992 4.158 3.96 6.402 1.771 3.3-3.201 6.523-6.468 9.79-9.702a44211.7 44211.7 0 0139.479-39.237c2.86-2.838 4.114-6.226 3.41-10.186-.319-1.716-.935-3.388-1.518-5.038a119.9 119.9 0 00-18.579-34.375 100.298 100.298 0 00-21.67-20.724 2.057 2.057 0 01-.814-1.254 7.502 7.502 0 00-10.384-6.138 1.936 1.936 0 01-1.397.011 100.309 100.309 0 00-36.96-9.548 116.578 116.578 0 00-30.47 1.716 98.208 98.208 0 00-24.222 7.986 1.947 1.947 0 01-1.925 0 7.326 7.326 0 00-10.56 6.358c0 .66-.242 1.045-.748 1.441-3.366 2.673-6.864 5.214-10.01 8.129-14.784 13.695-24.838 30.404-31.295 49.357-1.628 4.796-.55 8.91 3.025 12.463l39.16 38.929c3.278 3.267 6.545 6.534 9.856 9.779 1.903 1.87 4.774 1.54 6.017-.671.847-1.529.638-3.036-.363-4.444a50.754 50.754 0 01-9.372-24.783 50.314 50.314 0 012.53-21.769c.55-1.595 1.232-3.157 1.881-4.807l15.532 9.13a34.243 34.243 0 0015.202 43.12 34.397 34.397 0 0042.922-8.118c5.06-6.017 7.744-13.002 7.898-20.867.22-11.726-4.631-21.076-13.75-28.358l9.284-15.587zm51.315 33.44c-.286-1.826-.55-3.509-.836-5.192a77 77 0 00-5.412-18.04c-.275-.66-.341-1.166-.011-1.848a7.304 7.304 0 00-4.059-9.977 7.447 7.447 0 00-9.669 4.532 7.26 7.26 0 004.972 9.372 2.97 2.97 0 012.266 1.991c3.344 8.195 5.203 16.687 5.467 25.52a2.156 2.156 0 01-.484 1.452c-5.027 5.06-10.098 10.076-15.147 15.103-.176.165-.385.297-.462.374 4.818-23.87-1.045-44.561-20.218-60.137-19.921-16.17-42.119-17.413-65.428-6.897l-7.117-12.287c2.541-1.133 4.983-2.31 7.48-3.344a75.086 75.086 0 0120.075-4.95c.891-.099 1.54.044 2.233.748a7.26 7.26 0 0010.472-.055 2.09 2.09 0 011.914-.704c16.863 1.826 31.493 8.448 43.835 20.031.99.935 1.925 1.914 2.882 2.882 1.705 1.716 3.586 1.76 5.324.088l11.561-11.187 1.078-1.023c1.386 1.76 2.783 3.454 4.081 5.214a113.432 113.432 0 0117.05 33.55 3.795 3.795 0 01-1.001 4.125l-10.164 10.109c-.176.165-.385.297-.682.55zm-13.926-58.41l-9.878 9.559c-.297-.253-.572-.484-.825-.726a80.531 80.531 0 00-36.883-20.24c-3.883-.946-7.898-1.386-11.847-2.024-.693-.11-1.166-.253-1.595-.913a7.458 7.458 0 00-12.474.022 2.145 2.145 0 01-1.364.836c-25.454 2.794-45.43 14.718-60.06 35.552a2.002 2.002 0 01-1.496.913c-5.126.836-7.733 5.83-5.61 10.56a1.804 1.804 0 010 1.32 80.102 80.102 0 00-6.105 22.033c-.066.473-.165.935-.275 1.584l-.946-.88c-3.146-3.135-6.27-6.303-9.46-9.394-1.474-1.43-1.958-2.948-1.265-4.95 7.403-21.23 19.173-39.402 37.51-52.965.209-.154.429-.286.627-.451.66-.583 1.265-.748 2.244-.484a7.37 7.37 0 009.229-5.764 1.683 1.683 0 01.781-1.034 86.185 86.185 0 0114.806-5.676c12.045-3.421 24.343-4.312 36.773-3.421a91.828 91.828 0 0133.055 8.448c.66.308.99.66 1.1 1.43a7.37 7.37 0 0010.12 5.764c.352-.132.913-.143 1.188.044 4.499 3.102 8.635 6.622 12.452 10.505.077.077.11.187.198.352zm-40.304 67.98c.077 14.641-11.99 26.708-26.796 26.796a26.939 26.939 0 01-27.016-26.708c-.066-14.663 11.979-26.697 26.818-26.774a26.84 26.84 0 0126.994 26.675zm-84.678 13.904l-6.952-6.985c-2.86-2.86-5.742-5.676-8.58-8.558a2.156 2.156 0 01-.616-1.397 72.633 72.633 0 015.808-26.433 1.562 1.562 0 011.243-1.045c4.939-1.155 7.238-5.467 5.489-10.175-.11-.33-.11-.825.055-1.1a72.886 72.886 0 0120.416-20.13c.033-.022.066-.022.22-.066l2.915 4.972 6.116 10.56c1.232 2.156 2.838 2.629 4.961 1.342a50.171 50.171 0 0118.106-6.644 51.81 51.81 0 0132.285 4.983c.099.055.176.132.374.286l-9.229 15.477c-17.435-6.545-31.845-2.64-43.483 11.847l-15.477-9.097c1.386-1.859 2.706-3.652 4.059-5.412.55-.726 1.188-1.386 1.804-2.068.946-1.056.946-1.65-.022-2.64a246.752 246.752 0 00-2.574-2.574c-1.166-1.144-1.738-1.144-2.838.044a58.344 58.344 0 00-11.132 17.171 57.838 57.838 0 00-4.378 28.16c.286 3.08.913 6.127 1.43 9.482zm57.728-88.11a4.224 4.224 0 01-4.136-4.147 4.257 4.257 0 014.18-4.114 4.224 4.224 0 014.125 4.158 4.202 4.202 0 01-4.169 4.114zm-50.6-15.554a4.103 4.103 0 014.213 4.048 4.158 4.158 0 01-8.316 0 4.092 4.092 0 014.103-4.048zm118.811 56.1a4.092 4.092 0 01-.077-8.173 4.087 4.087 0 11.077 8.173zm-17.633-56.1c2.343 0 4.125 1.76 4.114 4.092a4.081 4.081 0 01-4.059 4.07 4.114 4.114 0 01-4.18-4.07 4.048 4.048 0 014.125-4.103zm-114.598 52.008a4.07 4.07 0 01-4.136 4.092 4.048 4.048 0 01-4.103-4.125 4.07 4.07 0 014.081-4.048 4.081 4.081 0 014.158 4.081z"
      fill="#fff"
    />
  </Svg>
);

export default SvgPrl;