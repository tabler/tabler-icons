import * as React from "react";

function IconTestPipe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-test-pipe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" /><line x1={10} y1={10} x2={16} y2={10} /><path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /></svg>;
}

export default IconTestPipe;