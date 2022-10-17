import * as React from "react";

function IconClockStop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-stop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12a9 9 0 1 0 -9 9" /><path d="M12 7v5l1 1" /><path d="M16 16h6v6h-6z" /></svg>;
}

export default IconClockStop;