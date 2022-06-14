import * as React from "react";

function IconHash({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={5} y1={9} x2={19} y2={9} /><line x1={5} y1={15} x2={19} y2={15} /><line x1={11} y1={4} x2={7} y2={20} /><line x1={17} y1={4} x2={13} y2={20} /></svg>;
}

export default IconHash;