import * as React from "react";

function IconLivePhoto({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-live-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/live-photo"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={1} /><circle cx={12} cy={12} r={5} /><line x1={15.9} y1={20.11} x2={15.9} y2={20.12} /><line x1={19.04} y1={17.61} x2={19.04} y2={17.62} /><line x1={20.77} y1={14} x2={20.77} y2={14.01} /><line x1={20.77} y1={10} x2={20.77} y2={10.01} /><line x1={19.04} y1={6.39} x2={19.04} y2={6.4} /><line x1={15.9} y1={3.89} x2={15.9} y2={3.9} /><line x1={12} y1={3} x2={12} y2={3.01} /><line x1={8.1} y1={3.89} x2={8.1} y2={3.9} /><line x1={4.96} y1={6.39} x2={4.96} y2={6.4} /><line x1={3.23} y1={10} x2={3.23} y2={10.01} /><line x1={3.23} y1={14} x2={3.23} y2={14.01} /><line x1={4.96} y1={17.61} x2={4.96} y2={17.62} /><line x1={8.1} y1={20.11} x2={8.1} y2={20.12} /><line x1={12} y1={21} x2={12} y2={21.01} /></svg>;
}

export default IconLivePhoto;