import * as React from "react";

function IconBrandMessenger({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-messenger" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-messenger"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><path d="M8 13l3 -2l2 2l3 -2" /></svg>;
}

export default IconBrandMessenger;