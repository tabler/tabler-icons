import * as React from "react";

function IconJumpRope({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-jump-rope" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/jump-rope"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" /><rect x={16} y={3} width={4} height={7} rx={2} /><rect x={4} y={14} width={4} height={7} rx={2} /></svg>;
}

export default IconJumpRope;