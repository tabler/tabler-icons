import * as React from "react";

function IconBuildingSkyscraper({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/building-skyscraper"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={21} x2={21} y2={21} /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><line x1={9} y1={9} x2={9} y2={9.01} /><line x1={9} y1={12} x2={9} y2={12.01} /><line x1={9} y1={15} x2={9} y2={15.01} /><line x1={9} y1={18} x2={9} y2={18.01} /></svg>;
}

export default IconBuildingSkyscraper;