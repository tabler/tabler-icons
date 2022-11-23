import * as React from "react";

function IconHandSanitizer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-sanitizer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" /><path d="M15 3h-6a2 2 0 0 0 -2 2" /><path d="M12 3v5" /><path d="M12 11v4" /><path d="M10 13h4" /></svg>;
}

export default IconHandSanitizer;