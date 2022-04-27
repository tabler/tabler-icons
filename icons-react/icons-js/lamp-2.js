import * as React from "react";

function IconLamp2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lamp-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/lamp-2"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21h9" /><path d="M10 21l-7 -8l8.5 -5.5" /><path d="M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8z" /><path d="M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144" /><path d="M15.5 11.995l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369" /></svg>;
}

export default IconLamp2;