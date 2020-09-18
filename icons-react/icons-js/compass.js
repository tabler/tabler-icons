import * as React from "react";

const IconCompass = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-compass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="8 16 10 10 16 8 14 14 8 16" /><circle cx={12} cy={12} r={9} /></svg>;

export default IconCompass;