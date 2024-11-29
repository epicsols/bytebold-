import * as React from "react";
const FbIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <circle cx={20}
      cy={20}
      r={19.2703}
      stroke="#D4D4D8"
      strokeWidth={1.45946} />
    <path
      d="M18.1553 29.006V21.0724H15.4855V17.9805H18.1553V15.7003C18.1553 13.0542 19.7715 11.6133 22.132 11.6133C23.2628 11.6133 24.2346 11.6975 24.5178 11.7351V14.5005L22.8806 14.5012C21.5968 14.5012 21.3482 15.1112 21.3482 16.0064V17.9805H24.41L24.0113 21.0724H21.3482V29.006H18.1553Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6_963"
        x1={21.2705}
        y1={-21.0071}
        x2={18.3911}
        y2={45.8436}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD449" />
        <stop offset={1} stopColor="#FFC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default FbIcon;
