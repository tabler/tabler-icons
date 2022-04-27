import * as React from "react";

function IconRollerSkating({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-roller-skating" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/roller-skating"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -.995 -1.1l.8 -8a1 1 0 0 1 .995 -.9z" /><circle cx={8} cy={17} r={2} /><circle cx={16} cy={17} r={2} /></svg>;
}

export default IconRollerSkating;