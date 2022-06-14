import * as React from "react";

function IconBrandDoctrine({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-doctrine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={14} r={7} /><path d="M9 14h6" /><path d="M12 11l3 3l-3 3" /><path d="M10 3l6.9 6" /></svg>;
}

export default IconBrandDoctrine;