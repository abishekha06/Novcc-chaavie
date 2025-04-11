import * as React from "react";
const SvgTdr = ({ active = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={19}
    fill="none"
    className={active ? "text-blue-500" : "text-gray-400"}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.408}
      d="M1 16.583a2.2 2.2 0 0 0 1.833.917 2.2 2.2 0 0 0 1.834-.917 2.2 2.2 0 0 1 1.833-.916 2.2 2.2 0 0 1 1.833.916 2.2 2.2 0 0 0 1.834.917A2.2 2.2 0 0 0 12 16.583a2.2 2.2 0 0 1 1.833-.916 2.2 2.2 0 0 1 1.834.916 2.2 2.2 0 0 0 1.833.917 2.2 2.2 0 0 0 1.833-.917m-16.5-1.833-.916-4.583h16.5l-1.834 3.666M3.75 10.167v-5.5h7.333l3.667 5.5m-9.167-5.5V1h-.916"
    />
  </svg>
);
export default SvgTdr;
