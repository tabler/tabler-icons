import * as React from "react";

function IconBooksOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-books-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14" /><path d="M8 4a1 1 0 0 1 1 1" /><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" /><path d="M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10" /><path d="M5 8h3" /><path d="M9 16h4" /><path d="M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75" /><path d="M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458" /><path d="M14 9l4 -1" /><path d="M19.207 15.199l.716 -.18" /><path d="M3 3l18 18" /></svg>;
}

export default IconBooksOff;