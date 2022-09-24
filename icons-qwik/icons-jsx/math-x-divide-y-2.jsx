import { component$ } from "@builder.io/qwik";

const IconMathXDivideY2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-math-x-divide-y-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 -18" /><path d="M15 14l3 4.5" /><path d="M21 14l-4.5 7" /><path d="M3 4l6 6" /><path d="M3 10l6 -6" /></svg>;
});

export default IconMathXDivideY2;