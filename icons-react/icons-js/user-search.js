import * as React from "react";

function IconUserSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/user-search"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={7} r={4} /><path d="M6 21v-2a4 4 0 0 1 4 -4h1" /><circle cx={16.5} cy={17.5} r={2.5} /><path d="M18.5 19.5l2.5 2.5" /></svg>;
}

export default IconUserSearch;