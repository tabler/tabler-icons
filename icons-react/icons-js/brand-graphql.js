import * as React from "react";

function IconBrandGraphql({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-graphql" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 16l-8 -13l-8 13l8 5l8 -5v-8l-8 -5l-8 5v8z" /><circle cx={12} cy={3} r={1} /><circle cx={12} cy={21} r={1} /><circle cx={4} cy={8} r={1} /><circle cx={4} cy={16} r={1} /><circle cx={20} cy={16} r={1} /><circle cx={20} cy={8} r={1} /></svg>;
}

export default IconBrandGraphql;