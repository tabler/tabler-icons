import * as React from "react";

const IconMedal = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-medal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4v3m-4 -3v6m8 -6v6" /><path d="M12 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z" /></svg>;

export default IconMedal;