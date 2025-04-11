import * as React from "react";
const SvgContainer = ({ active = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={active ? "text-pink-500" : "text-white"}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#container_svg__a)">
      <path d="m19.924 16.931-.892-.691q.03-.204.034-.409a2 2 0 0 0-.034-.408l.884-.692a.216.216 0 0 0 .05-.266l-.834-1.441a.21.21 0 0 0-.258-.092l-1.033.417a2.8 2.8 0 0 0-.708-.409l-.158-1.1a.2.2 0 0 0-.2-.175H15.11a.22.22 0 0 0-.208.176l-.159 1.1q-.38.16-.708.408l-1.033-.417a.22.22 0 0 0-.258.092l-.833 1.442a.21.21 0 0 0 .05.266l.883.692a3.3 3.3 0 0 0 0 .817l-.883.691a.216.216 0 0 0-.05.266l.833 1.442a.21.21 0 0 0 .258.091l1.034-.416q.324.256.707.408l.159 1.1a.21.21 0 0 0 .208.175h1.666a.216.216 0 0 0 .208-.175l.158-1.1q.377-.158.7-.408l1.041.416a.22.22 0 0 0 .259-.091l.832-1.442a.22.22 0 0 0-.05-.267m-3.982.15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
      <path d="M7.495 2.5a1.63 1.63 0 0 0 .663 1.3L3.745 6.657H2.492A1.664 1.664 0 0 0 .828 8.319v6.683a1.664 1.664 0 0 0 1.664 1.665h6.736a6 6 0 0 1-.067-.834 7 7 0 0 1 .834-3.333V10a.833.833 0 0 1 1.667 0v1.043a5.7 5.7 0 0 1 1.666-.804v-.237a.833.833 0 0 1 .834-.835.816.816 0 0 1 .833.833c.864.01 1.717.205 2.5.57V8.32a1.664 1.664 0 0 0-1.664-1.664h-1.243L10.17 3.798a1.63 1.63 0 0 0 .658-1.298 1.68 1.68 0 0 0-.821-1.432V0H9.16v1.672a.827.827 0 1 1-.833.828M4.995 13.333a.833.833 0 0 1-1.667 0v-3.331a.833.833 0 1 1 1.667 0zm3.333 0a.833.833 0 0 1-1.667 0V10a.833.833 0 0 1 1.667 0zm.848-9.187 3.879 2.51H5.28l3.877-2.51" />
    </g>
    <defs>
      <clipPath id="container_svg__a">
        <path fill="currentColor" d="M-.004 0h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContainer;
