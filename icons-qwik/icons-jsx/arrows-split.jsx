import { component$ } from "@builder.io/qwik";

const IconArrowsSplit = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-split" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 17h-8l-3.5 -5h-6.5" /><path d="M21 7h-8l-3.495 5" /><path d="M18 10l3 -3l-3 -3" /><path d="M18 20l3 -3l-3 -3" /></svg>;
});

export default IconArrowsSplit;