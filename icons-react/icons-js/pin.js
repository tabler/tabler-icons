import * as React from "react";

const IconPin = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-pin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={20} x2={9.5} y2={14.5} /><path d="M6 11l7 7l1 -1l1 -4l4 -4m-4 -4l-4 4l-4 1l-1 1" /><line x1={14} y1={4} x2={20} y2={10} /></svg>;

export default IconPin;