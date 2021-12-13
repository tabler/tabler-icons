import * as React from "react";

function IconBrandTidal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tidal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" /><path d="M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z" /><path d="M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" /><path d="M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" /></svg>;
}

export default IconBrandTidal;