import { component$ } from "@builder.io/qwik";

const IconArrowRotaryLastRight = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-last-right" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9} cy={12} r={3} /><path d="M9 15v6" /><path d="M11.5 9.5l6.5 -6.5" /><path d="M13 3h5v5" /></svg>;
});

export default IconArrowRotaryLastRight;