import { component$ } from "@builder.io/qwik";

const IconAntennaBars5 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-antenna-bars-5" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={6} y1={18} x2={6} y2={15} /><line x1={10} y1={18} x2={10} y2={12} /><line x1={14} y1={18} x2={14} y2={9} /><line x1={18} y1={18} x2={18} y2={6} /></svg>;
});

export default IconAntennaBars5;