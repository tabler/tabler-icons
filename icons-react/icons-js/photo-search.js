import * as React from "react";

function IconPhotoSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8h.01" /><path d="M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4.5" /><path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l2 2" /><circle cx={18} cy={18} r={3} /><path d="M20.2 20.2l1.8 1.8" /></svg>;
}

export default IconPhotoSearch;