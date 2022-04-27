import * as React from "react";

function IconFidgetSpinner({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fidget-spinner" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/fidget-spinner"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 17a3 3 0 1 1 -1.543 -2.623l2.087 -3.754a3 3 0 0 1 1.456 -5.623a3 3 0 0 1 1.457 5.623l2.087 3.754a3 3 0 1 1 -1.538 2.8l-.006 -.177h-4z" /><path d="M17 17v.01" /><path d="M7 17v.01" /><path d="M12 8v.01" /></svg>;
}

export default IconFidgetSpinner;