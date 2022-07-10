import * as React from "react";

function IconLogicNot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logic-not" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 12h-3" /><path d="M2 9h3" /><path d="M2 15h3" /><path d="M5 5l10 7l-10 7z" /><circle cx={17} cy={12} r={2} /></svg>;
}

export default IconLogicNot;