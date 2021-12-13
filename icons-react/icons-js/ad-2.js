import * as React from "react";

function IconAd2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ad-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.933 5h-6.933v16h13v-8" /><path d="M14 17h-5" /><path d="M9 13h5v-4h-5z" /><path d="M15 5v-2" /><path d="M18 6l2 -2" /><path d="M19 9h2" /></svg>;
}

export default IconAd2;