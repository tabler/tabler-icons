import * as React from "react";

function IconFoldDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fold-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/fold-down"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 11v8l3 -3m-6 0l3 3" /><line x1={9} y1={7} x2={10} y2={7} /><line x1={14} y1={7} x2={15} y2={7} /><line x1={19} y1={7} x2={20} y2={7} /><line x1={4} y1={7} x2={5} y2={7} /></svg>;
}

export default IconFoldDown;