import { component$ } from "@builder.io/qwik";

const IconArrowsDoubleNwSe = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-double-nw-se" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 21l-11 -11" /><path d="M3 14v-4h4" /><path d="M17 14h4v-4" /><line x1={10} y1={3} x2={21} y2={14} /></svg>;
});

export default IconArrowsDoubleNwSe;