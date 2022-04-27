import * as React from "react";

function IconBrandAppstore({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-appstore" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-appstore"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" /><path d="M7 14h5m2.9 0h2.1" /><path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1.003 -1.805" /></svg>;
}

export default IconBrandAppstore;