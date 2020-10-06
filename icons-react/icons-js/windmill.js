import * as React from "react";

function IconWindmill({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-windmill" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9z" /><path d="M12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9z" /><path d="M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9z" /><path d="M12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z" /></svg>;
}

export default IconWindmill;