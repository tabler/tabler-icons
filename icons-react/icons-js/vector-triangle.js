import * as React from "react";

function IconVectorTriangle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-triangle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={10} y={4} width={4} height={4} rx={1} /><rect x={3} y={17} width={4} height={4} rx={1} /><rect x={17} y={17} width={4} height={4} rx={1} /><line x1={6.5} y1={17.1} x2={11.5} y2={8} /><line x1={17.5} y1={17.1} x2={12.5} y2={8} /><line x1={7} y1={19} x2={17} y2={19} /></svg>;
}

export default IconVectorTriangle;