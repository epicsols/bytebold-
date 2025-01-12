import * as React from "react";
const Ongoing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    viewBox="0 0 78 78"
    fill="none"
    {...props}
  >
    <circle opacity={0.1} cx={39} cy={39} r={39} fill={props.bg} />
    <path
      d="M59 23.6377H19V51.8986H59V23.6377Z"
      fill="url(#paint0_linear_4_113)"
    />
    <path
      d="M24.7148 44.7142C24.7148 46.2368 25.0844 47.7445 25.8023 49.1511C26.5203 50.5578 27.5725 51.8359 28.8991 52.9126C30.2256 53.9892 31.8004 54.8433 33.5337 55.4259C35.2669 56.0085 37.1246 56.3085 39.0006 56.3085C40.8766 56.3085 42.7342 56.0085 44.4675 55.4259C46.2007 54.8433 47.7755 53.9892 49.102 52.9126C50.4286 51.8359 51.481 50.5578 52.1988 49.1511C52.9167 47.7445 53.2863 46.2368 53.2863 44.7142H39.0006H24.7148Z"
      fill="url(#paint1_linear_4_113)"
    />
    <path
      d="M24.7148 30.4286V39H53.2863V30.4286H24.7148Z"
      fill="url(#paint2_linear_4_113)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4_113"
        x1={19}
        y1={23.6377}
        x2={59.4128}
        y2={51.2955}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#042E58" />
        <stop offset={1} stopColor="#001F3F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_113"
        x1={38.5118}
        y1={68.0988}
        x2={36.5583}
        y2={46.4369}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12908D" />
        <stop offset={1} stopColor="#14B1A8" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4_113"
        x1={38.5118}
        y1={47.7164}
        x2={37.4402}
        y2={31.6433}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12908D" />
        <stop offset={1} stopColor="#14B1A8" />
      </linearGradient>
    </defs>
  </svg>
);
export default Ongoing;
