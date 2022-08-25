import * as React from "react";

function IconClipboardHeart({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-heart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><rect x={9} y={3} width={6} height={4} rx={2} /><path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 .005 -2.632a1.775 1.775 0 0 0 -2.56 -.005l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 -.004a1.899 1.899 0 0 0 -.004 2.632l2.738 2.825z" /></svg>;
}

export default IconClipboardHeart;