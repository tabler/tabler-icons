import * as React from "react";

function IconPyramidOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pyramid-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/pyramid-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.483 8.471l-5.483 8.529l9 4l6.22 -2.764m2.78 -1.236l-9 -14l-1.937 3.014" /><path d="M12 3v5m0 4v9" /><path d="M3 3l18 18" /></svg>;
}

export default IconPyramidOff;