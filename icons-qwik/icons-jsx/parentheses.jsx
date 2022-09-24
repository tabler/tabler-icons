import { component$ } from "@builder.io/qwik";

const IconParentheses = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-parentheses" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4a12.25 12.25 0 0 0 0 16" /><path d="M17 4a12.25 12.25 0 0 1 0 16" /></svg>;
});

export default IconParentheses;