import * as React from "react";

const IconMouse = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-mouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={7} y={4} width={10} height={16} rx={4} /><line x1={12} y1={8} x2={12} y2={11} /></svg>;

export default IconMouse;