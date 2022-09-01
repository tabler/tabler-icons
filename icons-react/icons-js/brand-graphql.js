import * as React from "react";

function IconBrandGraphql({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-graphql" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><g transform="translate(2.5 2)"><path d="M2.808 5.265l5.385 -3.029" /><path d="M10.808 2.235l5.384 3.03" /><path d="M17.5 7.5v5" /><path d="M16.193 14.736l-5.385 3.029" /><path d="M8.192 17.765l-5.384 -3.03" /><path d="M1.5 12.5v-5" /><path d="M10.272 2.786l6.121 10.202" /><path d="M16 14h-13" /><path d="M2.607 12.988l6.122 -10.201" /><circle cx={9.5} cy={1.5} r={1.5} /><circle cx={9.5} cy={18.5} r={1.5} /><circle cx={1.5} cy={6} r={1.5} /><circle cx={1.5} cy={14} r={1.5} /><circle cx={17.5} cy={14} r={1.5} /><circle cx={17.5} cy={6} r={1.5} /></g></svg>;
}

export default IconBrandGraphql;