import { component$ } from "@builder.io/qwik";

const IconArrowRightTail = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-tail" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 15l3 -3l-3 -3" /><path d="M3 15l3 -3l-3 -3" /><line x1={6} y1={12} x2={21} y2={12} /></svg>;
});

export default IconArrowRightTail;