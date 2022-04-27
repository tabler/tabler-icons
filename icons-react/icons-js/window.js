import * as React from "react";

function IconWindow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-window" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/window"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z" /><line x1={5} y1={13} x2={19} y2={13} /><line x1={12} y1={3} x2={12} y2={21} /></svg>;
}

export default IconWindow;