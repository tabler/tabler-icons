import { component$ } from "@builder.io/qwik";

const IconTxt = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-txt" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8h4" /><path d="M5 8v8" /><path d="M17 8h4" /><path d="M19 8v8" /><path d="M10 8l4 8" /><path d="M10 16l4 -8" /></svg>;
});

export default IconTxt;