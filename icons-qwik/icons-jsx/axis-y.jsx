import { component$ } from "@builder.io/qwik";

const IconAxisY = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-axis-y" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 20h-.01" /><path d="M15 20h-.01" /><path d="M19 20h-.01" /><path d="M4 7l3 -3l3 3" /><path d="M7 20v-16" /></svg>;
});

export default IconAxisY;