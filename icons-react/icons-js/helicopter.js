import * as React from "react";

function IconHelicopter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-helicopter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10l1 2h6" /><path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" /><line x1={13} y1={9} x2={13} y2={6} /><line x1={5} y1={6} x2={20} y2={6} /><path d="M15 9.1v3.9h5.5" /><line x1={15} y1={19} x2={15} y2={16} /><line x1={19} y1={19} x2={11} y2={19} /></svg>;
}

export default IconHelicopter;