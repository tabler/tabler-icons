import * as React from "react";

function IconBucketOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bucket-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/bucket-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.184 17.173l-.184 .827c-.193 1.183 -1.034 2.024 -2 2h-6c-.966 .024 -1.807 -.817 -2 -2l-2 -9h4m4 0h6l-1.089 4.9" /><path d="M7 9c0 -.596 .104 -1.167 .295 -1.697m1.705 -2.303a5 5 0 0 1 8 4" /><path d="M3 3l18 18" /></svg>;
}

export default IconBucketOff;