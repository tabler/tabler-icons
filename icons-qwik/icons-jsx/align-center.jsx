import { component$ } from "@builder.io/qwik";

const IconAlignCenter = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-center" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={6} x2={20} y2={6} /><line x1={8} y1={12} x2={16} y2={12} /><line x1={6} y1={18} x2={18} y2={18} /></svg>;
});

export default IconAlignCenter;