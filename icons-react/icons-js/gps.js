import * as React from "react";

const IconGps = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-gps" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={8} /><path d="M12 8l-3 7.5 3-1.5 3 1.5z" /></svg>;

export default IconGps;