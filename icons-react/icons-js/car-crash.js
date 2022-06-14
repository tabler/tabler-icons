import * as React from "react";

function IconCarCrash({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-crash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={17} r={2} /><path d="M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4" /><path d="M14 8v-2" /><path d="M19 12h2" /><path d="M17.5 15.5l1.5 1.5" /><path d="M17.5 8.5l1.5 -1.5" /></svg>;
}

export default IconCarCrash;