import * as React from "react";
const SvgStuffing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#2A85FF"
      d="M1.874.875H15.29a1.917 1.917 0 0 1 1.917 1.917v6.785a5.75 5.75 0 0 0-4.14.881H9.54v3.834h1.035a5.8 5.8 0 0 0 0 1.916H1.874a1.917 1.917 0 0 1-1.917-1.916v-11.5C-.043 1.738.82.875 1.874.875m0 3.833v3.834h5.75V4.708zm7.666 0v3.834h5.75V4.708zm-7.666 5.75v3.834h5.75v-3.834zm13.838 1.917v1.917h3.833v1.916h-3.833v1.917l-2.875-2.875z"
    />
  </svg>
);
export default SvgStuffing;
