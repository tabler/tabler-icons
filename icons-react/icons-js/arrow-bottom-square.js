import * as React from "react";

function IconArrowBottomSquare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bottom-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/arrow-bottom-square"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 7v14" /><path d="M9 18l3 3l3 -3" /><path d="M14 3v4h-4v-4z" /></svg>;
}

export default IconArrowBottomSquare;