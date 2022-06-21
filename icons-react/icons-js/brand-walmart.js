import * as React from "react";

function IconBrandWalmart({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-walmart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 8.04v-5.04" /><path d="M15.5 10l4.5 -2.5" /><path d="M15.5 14l4.5 2.5" /><path d="M12 15.96v5.04" /><path d="M8.5 14l-4.5 2.5" /><path d="M8.5 10l-4.5 -2.505" /></svg>;
}

export default IconBrandWalmart;