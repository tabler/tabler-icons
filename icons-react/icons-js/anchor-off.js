import * as React from "react";

function IconAnchorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-anchor-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12v9m-8 -8a8 8 0 1 0 16 0m1 0h-2m-14 0h-2" /><path d="M12.866 8.873a3.001 3.001 0 1 0 -3.737 -3.747" /><path d="M3 3l18 18" /></svg>;
}

export default IconAnchorOff;