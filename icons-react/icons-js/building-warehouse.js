import * as React from "react";

function IconBuildingWarehouse({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-warehouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/building-warehouse"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21v-13l9 -4l9 4v13" /><path d="M13 13h4v8h-10v-6h6" /><path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>;
}

export default IconBuildingWarehouse;