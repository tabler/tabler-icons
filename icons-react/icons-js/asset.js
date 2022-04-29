import * as React from "react";

function IconAsset({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-asset" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/asset"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9} cy={15} r={6} /><circle cx={9} cy={15} r={2} /><circle cx={19} cy={5} r={2} /><path d="M14.218 17.975l6.619 -12.174" /><path d="M6.079 9.756l12.217 -6.631" /><circle cx={9} cy={15} r={2} /></svg>;
}

export default IconAsset;