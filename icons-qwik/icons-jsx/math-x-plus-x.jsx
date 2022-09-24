import { component$ } from "@builder.io/qwik";

const IconMathXPlusX = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-math-x-plus-x" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 9l6 6" /><path d="M2 15l6 -6" /><path d="M16 9l6 6" /><path d="M16 15l6 -6" /><path d="M10 12h4" /><path d="M12 10v4" /></svg>;
});

export default IconMathXPlusX;