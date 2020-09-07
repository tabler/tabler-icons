import * as React from "react";

const IconChartLine = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-chart-line" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={4} y1={19} x2={20} y2={19} /><polyline points="4 15 8 9 12 11 16 6 20 10" /></svg>;

export default IconChartLine;