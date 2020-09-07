import * as React from "react";

const IconSeparatorHorizontal = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-separator-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={4} y1={12} x2={20} y2={12} /><polyline points="8 8 12 4 16 8" /><polyline points="16 16 12 20 8 16" /></svg>;

export default IconSeparatorHorizontal;