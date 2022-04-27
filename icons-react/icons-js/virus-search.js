import * as React from "react";

function IconVirusSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/virus-search"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 12a5 5 0 1 0 -5 5" /><path d="M12 7v-4m-1 0h2" /><path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" /><path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" /><path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" /><path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" /><path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" /><path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" /><circle cx={17.5} cy={17.5} r={2.5} /><line x1={19.5} y1={19.5} x2={22} y2={22} /></svg>;
}

export default IconVirusSearch;