import { component$ } from "@builder.io/qwik";

const IconDiscount = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={9} y1={15} x2={15} y2={9} /><circle cx={9.5} cy={9.5} r={0.5} fill="currentColor" /><circle cx={14.5} cy={14.5} r={0.5} fill="currentColor" /><circle cx={12} cy={12} r={9} /></svg>;
});

export default IconDiscount;