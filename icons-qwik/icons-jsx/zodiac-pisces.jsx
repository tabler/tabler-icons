import { component$ } from "@builder.io/qwik";

const IconZodiacPisces = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-pisces" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 3a21 21 0 0 1 0 18" /><path d="M19 3a21 21 0 0 0 0 18" /><line x1={5} y1={12} x2={19} y2={12} /></svg>;
});

export default IconZodiacPisces;