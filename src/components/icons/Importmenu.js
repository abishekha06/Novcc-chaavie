import * as React from "react";

const SvgImportmenu = ({ className, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    {...props}
  >
    <g clipPath="url(#importmenu_svg__a)">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.977}
        d="M9 7.109H6.286M9 9.823H6.286M10.357 1.68H4.25a.68.68 0 0 0-.679.68v11.535l1.588-.678 1.581.678 1.581-.678 1.581.678 1.581-.678 1.588.678v-2.036"
      />
      <circle cx={13.234} cy={4.856} r={3.257} fill={color} />
      <path
        fill={color}
        d="M13.067 5.861V2.902h.335v2.96l.898-.874.237.23-1.303 1.267-1.303-1.267.237-.23z"
      />
    </g>
    <defs>
      <clipPath id="importmenu_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgImportmenu;

