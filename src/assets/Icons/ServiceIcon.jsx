import * as React from "react";
const ServiceIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    viewBox="0 0 78 78"
    fill="none"
    {...props}
  >
    <circle opacity={0.1} cx={39} cy={39} r={39} fill="#22405C" />
    <path
      d="M37.2984 26.0001C32.4425 25.9845 27.7866 27.8455 24.355 31.1738C20.9234 34.5021 18.9971 39.025 19 43.7474C19.0029 48.4698 20.9346 53.005 24.3703 56.3554C27.8059 59.7057 32.4641 61.5966 37.32 61.6122L37.2984 26.0001Z"
      fill="url(#paint0_linear_4_127)"
    />
    <path
      d="M40.4821 51.6121C45.3394 51.6121 49.9979 49.7361 53.4326 46.3968C56.8673 43.0576 58.7969 38.5285 58.7969 33.806C58.7969 29.0836 56.8673 24.5545 53.4326 21.2153C49.9979 17.876 45.3395 16 40.4821 16V51.6121Z"
      fill="url(#paint1_linear_4_127)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4_127"
        x1={27.8466}
        y1={97.8267}
        x2={3.42711}
        y2={41.2991}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#12908D" />
        <stop offset={1} stopColor="#14B1A8" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_127"
        x1={68.4154}
        y1={34.9372}
        x2={37.7647}
        y2={34.2582}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC300" />
        <stop offset={1} stopColor="#FFC300" />
      </linearGradient>
    </defs>
  </svg>
);
export default ServiceIcon;
