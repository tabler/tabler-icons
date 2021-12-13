import * as React from "react";

function IconBrandEdge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-edge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" /><path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" /><path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" /><path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" /></svg>;
}

export default IconBrandEdge;