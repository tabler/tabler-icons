import * as React from "react";

function IconSwitchVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-switch-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/switch-vertical"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="3 8 7 4 11 8" /><line x1={7} y1={4} x2={7} y2={13} /><polyline points="13 16 17 20 21 16" /><line x1={17} y1={10} x2={17} y2={20} /></svg>;
}

export default IconSwitchVertical;