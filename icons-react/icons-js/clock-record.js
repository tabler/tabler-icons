import * as React from "react";

function IconClockRecord({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-record" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.995 12.3a9 9 0 1 0 -8.683 8.694" /><path d="M12 7v5l2 2" /><circle cx={19} cy={19} r={3} /></svg>;
}

export default IconClockRecord;