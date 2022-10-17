import * as React from "react";

function IconClockPlay({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-play" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 7v5l2 2" /><path d="M17 22l5 -3l-5 -3z" /><path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" /></svg>;
}

export default IconClockPlay;