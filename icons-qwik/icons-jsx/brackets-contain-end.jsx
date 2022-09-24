import { component$ } from "@builder.io/qwik";

const IconBracketsContainEnd = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brackets-contain-end" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 4h4v16h-4" /><path d="M5 16h.01" /><path d="M9 16h.01" /><path d="M13 16h.01" /></svg>;
});

export default IconBracketsContainEnd;