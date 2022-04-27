import * as React from "react";

function IconBrandGooglePlay({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-play" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/brand-google-play"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" /><line x1={15} y1={9} x2={4.5} y2={20.5} /><line x1={4.5} y1={3.5} x2={15} y2={15} /></svg>;
}

export default IconBrandGooglePlay;