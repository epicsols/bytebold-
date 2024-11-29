import * as React from "react";
const WebDevelopment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    viewBox="0 0 78 78"
    fill="none"
    {...props}
  >
    <circle opacity={0.1} cx={39} cy={39} r={39} fill={props.bg} />
    <mask
      id="mask0_4_88"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={19}
      y={19}
      width={40}
      height={40}
    >
      <path d="M59 19H19V59H59V19Z" fill="white" />
    </mask>
    <g mask="url(#mask0_4_88)">
      <path
        d="M60.1428 19.0952H39.5714V59.0946H60.1428V19.0952Z"
        fill="#042E58"
      />
      <path
        d="M19 59C24.4559 59 29.6883 56.8929 33.5462 53.1421C37.4041 49.3914 39.5714 44.3043 39.5714 39C39.5714 33.6957 37.4041 28.6086 33.5462 24.8579C29.6883 21.1071 24.4559 19 19 19V39V59Z"
        fill="#FFC300"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4_88"
        x1={39.5714}
        y1={19.0952}
        x2={68.3124}
        y2={26.2424}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#042E58" />
        <stop offset={1} stopColor="#001F3F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_88"
        x1={29.9391}
        y1={-2.00709}
        x2={24.3689}
        y2={64.5011}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC300" />
        <stop offset={1} stopColor="#FFC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default WebDevelopment;
