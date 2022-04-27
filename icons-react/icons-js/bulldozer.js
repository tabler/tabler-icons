import * as React from "react";

function IconBulldozer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulldozer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/bulldozer"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={4} cy={17} r={2} /><circle cx={13} cy={17} r={2} /><path d="M18 13v6h3" /><line x1={13} y1={19} x2={4} y2={19} /><line x1={4} y1={15} x2={13} y2={15} /><path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><line x1={18} y1={17} x2={15} y2={17} /></svg>;
}

export default IconBulldozer;