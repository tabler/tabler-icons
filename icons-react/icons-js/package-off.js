import * as React from "react";

function IconPackageOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-package-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/package-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" /><path d="M14.543 10.57l5.457 -3.07" /><path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" /><path d="M3 3l18 18" /></svg>;
}

export default IconPackageOff;