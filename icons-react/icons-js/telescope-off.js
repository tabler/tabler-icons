import * as React from "react";

function IconTelescopeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-telescope-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/telescope-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21.002l6 -5l6 5" /><path d="M12 13.002v8" /><path d="M8.238 8.264l-4.183 2.51c-1.02 .614 -1.357 1.898 -.76 2.906l.165 .28c.52 .88 1.624 1.266 2.605 .91l6.457 -2.34m2.907 -1.055l4.878 -1.77a1.023 1.023 0 0 0 .565 -1.455l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-6.016 3.61" /><path d="M14 5.002l3 5.5" /><path d="M3 3l18 18" /></svg>;
}

export default IconTelescopeOff;