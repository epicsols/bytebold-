import * as React from "react";
const Ecommerce = (props) => (
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
      d="M59 54.3623H19V26.1014H59V54.3623Z"
      fill="#042E58"
    />
    <path
      d="M24.7148 33.2858C24.7148 31.7632 25.0844 30.2555 25.8023 28.8489C26.5203 27.4422 27.5725 26.1641 28.8991 25.0874C30.2256 24.0108 31.8004 23.1567 33.5337 22.5741C35.2669 21.9915 37.1246 21.6915 39.0006 21.6915C40.8766 21.6915 42.7342 21.9915 44.4675 22.5741C46.2007 23.1567 47.7755 24.0108 49.102 25.0874C50.4286 26.1641 51.481 27.4422 52.1988 28.8489C52.9167 30.2555 53.2863 31.7632 53.2863 33.2858H39.0006H24.7148Z"
      fill="#FFC300"
    />
    <path
      d="M24.7148 47.5714V39H53.2863V47.5714H24.7148Z"
      fill="#12908D"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4_100"
        x1={19}
        y1={54.3623}
        x2={59.4128}
        y2={26.7045}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#042E58" />
        <stop offset={1} stopColor="#001F3F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_100"
        x1={39.9081}
        y1={39.3748}
        x2={39.5688}
        y2={19.9677}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC300" />
        <stop offset={1} stopColor="#FFC300" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4_100"
        x1={38.5118}
        y1={30.2836}
        x2={37.4402}
        y2={46.3567}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12908D" />
        <stop offset={1} stopColor="#14B1A8" />
      </linearGradient>
    </defs>
  </svg>
);
export default Ecommerce;
