import { component$ } from "@builder.io/qwik";

const IconArrowTopTail = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-top-tail" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={18} x2={12} y2={3} /><path d="M15 6l-3 -3l-3 3" /><path d="M15 21l-3 -3l-3 3" /></svg>;
});

export default IconArrowTopTail;