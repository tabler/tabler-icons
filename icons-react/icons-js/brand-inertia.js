import * as React from "react";

function IconBrandInertia({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-inertia" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" /><path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" /></svg>;
}

export default IconBrandInertia;