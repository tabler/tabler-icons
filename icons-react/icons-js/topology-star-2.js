import * as React from "react";

function IconTopologyStar2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-topology-star-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12h4" /><path d="M14 12h4" /><path d="M12 6v4" /><path d="M12 14v4" /></svg>;
}

export default IconTopologyStar2;