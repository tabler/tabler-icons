import * as React from "react";

function IconRoadOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-road-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/road-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19l3.332 -11.661" /><path d="M16 5l2.806 9.823" /><path d="M12 8v-2" /><path d="M12 13v-1" /><path d="M12 18v-2" /><path d="M3 3l18 18" /></svg>;
}

export default IconRoadOff;