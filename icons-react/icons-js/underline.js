import * as React from "react";

const IconUnderline = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-underline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={6} y1={20} x2={18} y2={20} /><path d="M8 5v6a4 4 0 0 0 8 0v-6" /></svg>;

export default IconUnderline;