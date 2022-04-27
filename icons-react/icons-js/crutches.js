import * as React from "react";

function IconCrutches({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crutches" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/crutches"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={8} y={3} width={8} height={4} rx={2} /><path d="M11 21h2" /><path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" /><path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" /><path d="M10 11h4" /></svg>;
}

export default IconCrutches;