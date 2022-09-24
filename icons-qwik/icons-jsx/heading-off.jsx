import { component$ } from "@builder.io/qwik";

const IconHeadingOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heading-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 12h5m4 0h1" /><path d="M7 7v12" /><path d="M17 5v8m0 4v2" /><path d="M15 19h4" /><path d="M15 5h4" /><path d="M5 19h4" /><path d="M3 3l18 18" /></svg>;
});

export default IconHeadingOff;