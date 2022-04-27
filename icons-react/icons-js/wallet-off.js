import * as React from "react";

function IconWalletOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/wallet-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 8v-3a1 1 0 0 0 -1 -1h-8m-3.413 .584a2 2 0 0 0 1.413 3.416h2m4 0h6a1 1 0 0 1 1 1v3" /><path d="M19 19a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" /><path d="M16 12h4v4m-4 0a2 2 0 0 1 -2 -2" /><path d="M3 3l18 18" /></svg>;
}

export default IconWalletOff;