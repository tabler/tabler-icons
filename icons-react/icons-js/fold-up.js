import * as React from "react";

function IconFoldUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fold-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13v-8l-3 3m6 0l-3 -3" /><line x1={9} y1={17} x2={10} y2={17} /><line x1={14} y1={17} x2={15} y2={17} /><line x1={19} y1={17} x2={20} y2={17} /><line x1={4} y1={17} x2={5} y2={17} /></svg>;
}

export default IconFoldUp;