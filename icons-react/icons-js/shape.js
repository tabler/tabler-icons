import * as React from "react";

function IconShape({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shape" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/shape"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={5} r={2} /><circle cx={19} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><circle cx={19} cy={19} r={2} /><line x1={5} y1={7} x2={5} y2={17} /><line x1={7} y1={5} x2={17} y2={5} /><line x1={7} y1={19} x2={17} y2={19} /><line x1={19} y1={7} x2={19} y2={17} /></svg>;
}

export default IconShape;