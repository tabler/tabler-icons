import * as React from "react";

function IconEggCracked({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-egg-cracked" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 14.083c0 4.154 -2.966 6.74 -7 6.917c-4.2 .006 -7 -2.763 -7 -6.917c0 -5.538 3.5 -11.09 7 -11.083c3.5 .007 7 5.545 7 11.083z" /><path d="M12 3l-1.5 5l3.5 2.5l-2 3.5" /></svg>;
}

export default IconEggCracked;