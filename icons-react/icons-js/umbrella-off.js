import * as React from "react";

function IconUmbrellaOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-umbrella-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/umbrella-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12h-8c0 -2.209 .895 -4.208 2.342 -5.656m2.382 -1.645a8 8 0 0 1 11.276 7.301l-4 .001" /><path d="M12 12v6a2 2 0 1 0 4 0" /><path d="M3 3l18 18" /></svg>;
}

export default IconUmbrellaOff;