import { component$ } from "@builder.io/qwik";

const IconArrowsDown = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-down" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={7} y1={21} x2={7} y2={3} /><path d="M20 18l-3 3l-3 -3" /><path d="M4 18l3 3l3 -3" /><line x1={17} y1={21} x2={17} y2={3} /></svg>;
});

export default IconArrowsDown;