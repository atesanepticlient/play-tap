/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
const Invite = (props: any) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "#FFD054",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#A76B00",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
    <title>{"share-solid"}</title>
    <path
      className="clr-i-solid clr-i-solid-path-1"
      fill="url(#goldGradient)"
      d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Z"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);
export default Invite;
