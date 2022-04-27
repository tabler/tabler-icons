import * as React from "react";

function IconHelmet({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-helmet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><desc>{"Download more icon variants from https://tabler-icons.io/i/helmet"}</desc><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z" /><path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" /></svg>;
}

export default IconHelmet;