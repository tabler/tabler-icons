import * as React from "react";

const IconFlipHorizontal = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-flip-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={3} y1={12} x2={21} y2={12} /><polyline points="7 16 17 16 7 21 7 16" /><polyline points="7 8 17 8 7 3 7 8" /></svg>;

export default IconFlipHorizontal;