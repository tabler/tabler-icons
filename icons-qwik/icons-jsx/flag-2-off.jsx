import { component$ } from "@builder.io/qwik";

const IconFlag2Off = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag-2-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 14h9m4 0h1v-9h-10m-4 0v16" /><path d="M3 3l18 18" /></svg>;
});

export default IconFlag2Off;