import { component$ } from "@builder.io/qwik";

const IconAxisX = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-axis-x" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13v.01" /><path d="M4 9v.01" /><path d="M4 5v.01" /><path d="M17 20l3 -3l-3 -3" /><path d="M4 17h16" /></svg>;
});

export default IconAxisX;