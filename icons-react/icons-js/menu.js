import * as React from "react";

const IconMenu = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-menu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={4} y1={8} x2={20} y2={8} /><line x1={4} y1={16} x2={20} y2={16} /></svg>;

export default IconMenu;