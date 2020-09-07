import * as React from "react";

const IconSelector = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-selector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="8 9 12 5 16 9" /><polyline points="16 15 12 19 8 15" /></svg>;

export default IconSelector;