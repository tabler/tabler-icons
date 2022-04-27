import * as React from "react";

function IconRecordMail({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-record-mail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/record-mail"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={12} r={3} /><circle cx={17} cy={12} r={3} /><line x1={7} y1={15} x2={17} y2={15} /></svg>;
}

export default IconRecordMail;