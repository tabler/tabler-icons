import * as React from "react";

function IconRazorElectric({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-razor-electric" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 3v2" /><path d="M12 3v2" /><path d="M16 3v2" /><path d="M9 12v6a3 3 0 0 0 6 0v-6h-6z" /><path d="M8 5h8l-1 4h-6z" /><path d="M12 17v1" /></svg>;
}

export default IconRazorElectric;