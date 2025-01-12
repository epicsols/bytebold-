import * as React from "react";
const WebDesgin = (props) => (
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
      id="mask0_4_74"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={19}
      y={21}
      width={40}
      height={36}
    >
      <path d="M59 21H19V56.6121H59V21Z" fill="red" />
    </mask>
    <g mask="url(#mask0_4_74)">
      <path
        d="M37.8233 21.0598C32.966 21.0442 28.3087 22.9052 24.876 26.2335C21.4434 29.5618 19.5165 34.0846 19.5194 38.8071C19.5223 43.5295 21.4546 48.0647 24.8913 51.4151C28.328 54.7653 32.9875 56.6563 37.8449 56.6719L37.8233 21.0598Z"
        fill="#14B1A8"
      />
      <path
        d="M58.1745 43.3148C58.1745 38.4575 56.2985 33.799 52.9592 30.3643C49.6199 26.9296 45.0909 25 40.3684 25C35.646 25 31.1169 26.9296 27.7777 30.3643C24.4384 33.799 22.5624 38.4573 22.5624 43.3148H58.1745Z"
        fill="#FFC300"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4_74"
        x1={28.3687}
        y1={92.8864}
        x2={3.95421}
        y2={36.3534}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12908D" />
        <stop offset={1} stopColor="#14B1A8" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_74"
        x1={41.4995}
        y1={15.3815}
        x2={40.8206}
        y2={46.0321}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC300" />
        <stop offset={1} stopColor="#FFC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default WebDesgin;
