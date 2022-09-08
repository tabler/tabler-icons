import * as React from "react";

function IconBoxModelOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-model-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 8h4v4m0 4h-8v-8" /><path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a1.994 1.994 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" /><path d="M16 16l3.3 3.3" /><path d="M16 8l3.3 -3.3" /><path d="M8 8l-3.3 -3.3" /><path d="M8 16l-3.3 3.3" /><path d="M3 3l18 18" /></svg>;
}

export default IconBoxModelOff;