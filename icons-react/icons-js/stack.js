import * as React from "react";

const IconStack = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-stack" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="12 4 4 8 12 12 20 8 12 4" /><polyline points="4 12 12 16 20 12" /><polyline points="4 16 12 20 20 16" /></svg>;

export default IconStack;