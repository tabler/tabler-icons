import { component$ } from "@builder.io/qwik";

const IconLayoutAlignRight = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-right" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={20} y1={4} x2={20} y2={20} /><rect x={4} y={9} width={12} height={6} rx={2} /></svg>;
});

export default IconLayoutAlignRight;