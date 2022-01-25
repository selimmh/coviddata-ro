import * as React from "react";

const SvgLogo = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5 2.862V1M13.104 1h2.793M14.5 26.138V28M15.896 28h-2.793M26.138 14.5H28M28 13.103v2.793M2.862 14.5H1M1 15.897v-2.793M8.681 4.421l-.93-1.613M6.54 3.507 8.96 2.11M20.319 24.579l.93 1.613M22.46 25.493l-2.42 1.397M24.579 8.681l1.612-.93M25.493 6.54l1.396 2.42M4.421 20.319l-1.612.93M3.507 22.46l-1.396-2.42M4.421 8.68 2.81 7.75M2.11 8.96l1.397-2.42M24.579 20.32l1.612.93M26.89 20.04l-1.397 2.42M20.319 4.421l.93-1.612M20.04 2.11l2.42 1.397M8.681 24.578l-.93 1.613M8.96 26.89l-2.42-1.397"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={14.5}
      cy={14.5}
      r={10.938}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <circle
      cx={14.034}
      cy={14.034}
      r={1.162}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <circle
      cx={14.034}
      cy={7.517}
      r={1.162}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <circle
      cx={14.966}
      cy={20.552}
      r={2.093}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <circle
      cx={8.856}
      cy={11.241}
      r={0.833}
      transform="rotate(-60 8.856 11.241)"
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <circle
      cx={20.846}
      cy={17.07}
      transform="rotate(-60 20.846 17.07)"
      stroke="currentColor"
      strokeWidth={1.4}
      r={1.675}
    />
    <mask id="logo_svg__a" fill="#fff">
      <circle
        cx={8.856}
        cy={17.759}
        transform="rotate(-120 8.856 17.759)"
        r={1.259}
      />
    </mask>
    <path
      d="M8.926 17.88a.14.14 0 0 1-.192-.051l2.425-1.4a2.66 2.66 0 0 0-3.633-.974l1.4 2.425Zm-.192-.051a.14.14 0 0 1 .052-.192l1.4 2.425a2.66 2.66 0 0 0 .973-3.633l-2.425 1.4Zm.052-.192a.14.14 0 0 1 .192.051l-2.425 1.4a2.66 2.66 0 0 0 3.633.974l-1.4-2.425Zm.192.051a.14.14 0 0 1-.052.192l-1.4-2.425a2.66 2.66 0 0 0-.973 3.633l2.425-1.4Z"
      fill="currentColor"
      mask="url(#logo_svg__a)"
    />
    <path
      d="M19.33 9.832a1.628 1.628 0 1 1 1.628 2.819 1.628 1.628 0 0 1-1.628-2.82Z"
      stroke="currentColor"
      strokeWidth={1.4}
    />
  </svg>
);

export default SvgLogo;
