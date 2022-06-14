import * as React from "react";

function IconRotateClockwise2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" /><line x1={5.63} y1={7.16} x2={5.63} y2={7.17} /><line x1={4.06} y1={11} x2={4.06} y2={11.01} /><line x1={4.63} y1={15.1} x2={4.63} y2={15.11} /><line x1={7.16} y1={18.37} x2={7.16} y2={18.38} /><line x1={11} y1={19.94} x2={11} y2={19.95} /></svg>;
}

export default IconRotateClockwise2;