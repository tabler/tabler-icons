import * as React from "react";

function IconTestPipe2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-test-pipe-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 3v15a3 3 0 0 1 -6 0v-15" /><path d="M9 12h6" /><path d="M8 3h8" /></svg>;
}

export default IconTestPipe2;