import * as React from "react";

function IconBrandSnowflake({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-snowflake" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 21v-5.5l4.5 2.5" /><path d="M10 21v-5.5l-4.5 2.5" /><path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" /><path d="M20.5 9.5l-4.5 2.5l4.5 2.5" /><path d="M10 3v5.5l-4.5 -2.5" /><path d="M14 3v5.5l4.5 -2.5" /><path d="M12 11l1 1l-1 1l-1 -1z" /></svg>;
}

export default IconBrandSnowflake;