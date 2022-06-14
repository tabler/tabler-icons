import * as React from "react";

function IconBrandYahoo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-yahoo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={6} x2={8} y2={6} /><line x1={7} y1={18} x2={14} y2={18} /><path d="M4.5 6l5.5 7v5" /><path d="M10 13l6 -5" /><line x1={12.5} y1={8} x2={17.5} y2={8} /><line x1={20} y1={11} x2={20} y2={15} /><line x1={20} y1={18} x2={20} y2={18.01} /></svg>;
}

export default IconBrandYahoo;