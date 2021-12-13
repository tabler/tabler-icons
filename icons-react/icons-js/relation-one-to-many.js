import * as React from "react";

function IconRelationOneToMany({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-relation-one-to-many" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={5} width={18} height={14} rx={2} /><path d="M7 10h1v4" /><path d="M14 14v-4l3 4v-4" /><line x1={11} y1={10.5} x2={11} y2={10.51} /><line x1={11} y1={13.5} x2={11} y2={13.51} /></svg>;
}

export default IconRelationOneToMany;