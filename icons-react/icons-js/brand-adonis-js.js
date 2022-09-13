import * as React from "react";

function IconBrandAdonisJs({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-adonis-js" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M8.863 16.922c1.137 -.422 1.637 -.922 3.137 -.922s2 .5 3.138 .922c.713 .264 1.516 -.102 1.778 -.772c.126 -.32 .11 -.673 -.044 -.983l-3.708 -7.474c-.297 -.598 -1.058 -.859 -1.7 -.583a1.24 1.24 0 0 0 -.627 .583l-3.709 7.474c-.321 .648 -.017 1.415 .679 1.714c.332 .143 .715 .167 1.056 .04z" /></svg>;
}

export default IconBrandAdonisJs;