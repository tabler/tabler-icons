import * as React from "react";

const IconScale = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-scale" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={3} x2={12} y2={21} /><line x1={9} y1={21} x2={15} y2={21} /><polyline points="3 6 6 7 12 5 18 7 21 6" /><path d="M6 7l-3 9a5 5 0 0 0 6 0l-3 -9" /><path d="M18 7l-3 9a5 5 0 0 0 6 0l-3 -9" /></svg>;

export default IconScale;