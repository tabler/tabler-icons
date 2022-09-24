import { component$ } from "@builder.io/qwik";

const IconArrowDownLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-left" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={17} y1={7} x2={7} y2={17} /><polyline points="16 17 7 17 7 8" /></svg>;
});

export default IconArrowDownLeft;