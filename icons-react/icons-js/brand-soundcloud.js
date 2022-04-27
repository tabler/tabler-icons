import * as React from "react";

function IconBrandSoundcloud({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-soundcloud" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-soundcloud"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" /><line x1={9} y1={8} x2={9} y2={17} /><line x1={6} y1={17} x2={6} y2={10} /><line x1={3} y1={16} x2={3} y2={14} /></svg>;
}

export default IconBrandSoundcloud;