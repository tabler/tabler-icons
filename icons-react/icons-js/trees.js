import * as React from "react";

const IconTrees = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-trees" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={3} width={8} height={14} rx={4} /><rect x={12} y={7} width={8} height={10} rx={3} /><line x1={8} y1={21} x2={8} y2={13} /><line x1={16} y1={21} x2={16} y2={14} /></svg>;

export default IconTrees;