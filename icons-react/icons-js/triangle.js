import * as React from "react";

const IconTriangle = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-triangle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19 h14 a2 2 0 0 0 1.84 -2.75 l-7.1 -12.25 a2 2 0 0 0 -3.5 0 l-7.1 12.25 a2 2 0 0 0 1.75 2.75" /></svg>;

export default IconTriangle;