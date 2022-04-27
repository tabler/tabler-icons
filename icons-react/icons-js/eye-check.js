import * as React from "react";

function IconEyeCheck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/eye-check"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={2} /><path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" /><path d="M15 19l2 2l4 -4" /></svg>;
}

export default IconEyeCheck;