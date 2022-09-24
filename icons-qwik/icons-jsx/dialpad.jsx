import { component$ } from "@builder.io/qwik";

const IconDialpad = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dialpad" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3h4v4h-4z" /><path d="M17 3h4v4h-4z" /><path d="M10 3h4v4h-4z" /><path d="M3 10h4v4h-4z" /><path d="M17 10h4v4h-4z" /><path d="M10 10h4v4h-4z" /><path d="M10 17h4v4h-4z" /></svg>;
});

export default IconDialpad;