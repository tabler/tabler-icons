import { component$ } from "@builder.io/qwik";

const IconLetterJ = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-j" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" /></svg>;
});

export default IconLetterJ;