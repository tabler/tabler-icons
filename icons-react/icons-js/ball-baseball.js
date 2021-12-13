import * as React from "react";

function IconBallBaseball({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-baseball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z" /><path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" /><path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" /></svg>;
}

export default IconBallBaseball;