import * as React from "react";

function IconBrandGoogleFit({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-fit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9.314l-2.343 -2.344a3.314 3.314 0 0 0 -4.686 4.686l2.343 2.344l4.686 4.686l7.03 -7.03a3.314 3.314 0 0 0 -4.687 -4.685l-7.03 7.029" /></svg>;
}

export default IconBrandGoogleFit;