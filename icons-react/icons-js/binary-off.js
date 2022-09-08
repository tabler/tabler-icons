import * as React from "react";

function IconBinaryOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-binary-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><g transform="translate(10 5)"><path d="M1 2v-2h-1m8 14v-1" /><rect x={5} width={3} height={5} rx={0.5} /><rect y={9} width={3} height={5} rx={0.5} /></g><path d="M6 10v.01" /><path d="M6 19v.01" /><path d="M3 3l18 18" /></svg>;
}

export default IconBinaryOff;