import * as React from "react";

function IconColorSwatch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/color-swatch"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" /><path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" /><path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" /><line x1={17} y1={17} x2={17} y2={17.01} /></svg>;
}

export default IconColorSwatch;