import * as React from "react";

function IconRecycleOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recycle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/recycle-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17l-2 2l2 2m-2 -2h9m1.896 -2.071a1.999 1.999 0 0 0 -.146 -.679l-.55 -1" /><path d="M8.536 11l-.732 -2.732l-2.732 .732m2.732 -.732l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" /><path d="M15.464 11l2.732 .732l.732 -2.732m-.732 2.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" /><path d="M3 3l18 18" /></svg>;
}

export default IconRecycleOff;