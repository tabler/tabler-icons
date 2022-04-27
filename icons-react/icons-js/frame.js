import * as React from "react";

function IconFrame({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-frame" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/frame"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={7} x2={20} y2={7} /><line x1={4} y1={17} x2={20} y2={17} /><line x1={7} y1={4} x2={7} y2={20} /><line x1={17} y1={4} x2={17} y2={20} /></svg>;
}

export default IconFrame;