import * as React from "react";

function IconDnaOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dna-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/dna-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" /><path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" /><path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" /><path d="M3 3l18 18" /></svg>;
}

export default IconDnaOff;