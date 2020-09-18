import * as React from "react";

const IconGripHorizontal = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-grip-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={5} cy={9} r={1} /><circle cx={5} cy={15} r={1} /><circle cx={12} cy={9} r={1} /><circle cx={12} cy={15} r={1} /><circle cx={19} cy={9} r={1} /><circle cx={19} cy={15} r={1} /></svg>;

export default IconGripHorizontal;