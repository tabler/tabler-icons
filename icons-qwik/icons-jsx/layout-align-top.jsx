import { component$ } from "@builder.io/qwik";

const IconLayoutAlignTop = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={4} x2={20} y2={4} /><rect x={9} y={8} width={6} height={12} rx={2} /></svg>;
});

export default IconLayoutAlignTop;