import * as React from "react";

function IconBrandWish({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-wish" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 6l5.981 2.392l-.639 6.037c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.381 1.057a4.328 4.328 0 0 0 4.132 -3.57c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.38 1.056a4.328 4.328 0 0 0 4.132 -3.57l.333 -4.633" /><path d="M14.504 14.429l.334 -2.999" /></svg>;
}

export default IconBrandWish;