import * as React from "react";

function IconPizza({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-pizza" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" /><path d="M5.2 15.772a14.939 14.939 0 0 0 6.995 1.728a14.944 14.944 0 0 0 6.638 -1.545" /><line x1={13} y1={11.01} x2={13} y2={11} /><line x1={11} y1={14} x2={11} y2={13.99} /></svg>;
}

export default IconPizza;