import * as React from "react";

function IconBrightnessDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={3} /><line x1={12} y1={5} x2={12} y2={5.01} /><line x1={17} y1={7} x2={17} y2={7.01} /><line x1={19} y1={12} x2={19} y2={12.01} /><line x1={17} y1={17} x2={17} y2={17.01} /><line x1={12} y1={19} x2={12} y2={19.01} /><line x1={7} y1={17} x2={7} y2={17.01} /><line x1={5} y1={12} x2={5} y2={12.01} /><line x1={7} y1={7} x2={7} y2={7.01} /></svg>;
}

export default IconBrightnessDown;