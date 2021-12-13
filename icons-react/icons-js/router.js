import * as React from "react";

function IconRouter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-router" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={13} width={18} height={8} rx={2} /><line x1={17} y1={17} x2={17} y2={17.01} /><line x1={13} y1={17} x2={13} y2={17.01} /><line x1={15} y1={13} x2={15} y2={11} /><path d="M11.75 8.75a4 4 0 0 1 6.5 0" /><path d="M8.5 6.5a8 8 0 0 1 13 0" /></svg>;
}

export default IconRouter;