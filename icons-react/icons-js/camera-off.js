import * as React from "react";

function IconCameraOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/camera-off"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.29 4.296a1 1 0 0 1 .71 -.296h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.179 2.824c-.25 .113 -.528 .176 -.821 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1c.292 0 .568 -.062 .818 -.175" /><path d="M10.436 10.44a3 3 0 1 0 4.126 4.122" /><line x1={3} y1={3} x2={21} y2={21} /></svg>;
}

export default IconCameraOff;