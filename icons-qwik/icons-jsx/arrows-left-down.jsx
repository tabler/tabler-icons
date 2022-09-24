import { component$ } from "@builder.io/qwik";

const IconArrowsLeftDown = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-left-down" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3l-4 4l4 4" /><path d="M3 7h11a3 3 0 0 1 3 3v11" /><path d="M13 17l4 4l4 -4" /></svg>;
});

export default IconArrowsLeftDown;