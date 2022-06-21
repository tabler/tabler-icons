import * as React from "react";

function IconBrandFlipboard({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-flipboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a0.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a0.973 .973 0 0 1 -.974 .973h-4.053a0.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973z" /></svg>;
}

export default IconBrandFlipboard;