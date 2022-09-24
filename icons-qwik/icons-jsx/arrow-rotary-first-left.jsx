import { component$ } from "@builder.io/qwik";

const IconArrowRotaryFirstLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-first-left" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" /><path d="M16 10v10" /><path d="M13.5 9.5l-8.5 8.5" /><path d="M10 18h-5v-5" /></svg>;
});

export default IconArrowRotaryFirstLeft;