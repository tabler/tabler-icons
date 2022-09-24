import { component$ } from "@builder.io/qwik";

const IconArrowRightSquare = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-square" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={12} x2={21} y2={12} /><path d="M18 15l3 -3l-3 -3" /><path d="M3 10h4v4h-4z" /></svg>;
});

export default IconArrowRightSquare;