import * as React from "react";

const IconUrgent = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-urgent" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 16v-4a4 4 0 0 1 8 0v4" /><path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" /><rect x={6} y={16} width={12} height={4} rx={1} /></svg>;

export default IconUrgent;