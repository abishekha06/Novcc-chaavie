import * as React from "react";
const SvgCro = ({ active = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    className={active ? "text-blue-500" : "text-gray-400"}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.388 1.83H2.055a.71.71 0 0 0-.709.71v9.916a.71.71 0 0 0 .709.708h11.333a.71.71 0 0 0 .708-.708V2.539a.71.71 0 0 0-.708-.708M2.055.415A2.125 2.125 0 0 0-.07 2.54v9.917a2.125 2.125 0 0 0 2.125 2.125h11.333a2.125 2.125 0 0 0 2.125-2.125V2.539A2.125 2.125 0 0 0 13.388.414zM3.47 3.956h1.417v1.416H3.471zm3.542 0a.708.708 0 0 0 0 1.416h4.25a.708.708 0 1 0 0-1.416zM4.888 6.789H3.471v1.417h1.417zm1.417.708a.71.71 0 0 1 .708-.708h4.25a.708.708 0 1 1 0 1.417h-4.25a.71.71 0 0 1-.708-.709M4.888 9.622H3.471v1.417h1.417zm1.417.709a.71.71 0 0 1 .708-.709h4.25a.708.708 0 1 1 0 1.417h-4.25a.71.71 0 0 1-.708-.708"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCro;