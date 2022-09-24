import { component$ } from "@builder.io/qwik";

const IconLayout2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={6} height={5} rx={2} /><rect x={4} y={13} width={6} height={7} rx={2} /><rect x={14} y={4} width={6} height={7} rx={2} /><rect x={14} y={15} width={6} height={5} rx={2} /></svg>;
});

export default IconLayout2;