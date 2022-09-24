import { component$ } from "@builder.io/qwik";

const IconFrameOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-frame-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h3m4 0h9" /><path d="M4 17h13" /><path d="M7 7v13" /><path d="M17 4v9m0 4v3" /><path d="M3 3l18 18" /></svg>;
});

export default IconFrameOff;