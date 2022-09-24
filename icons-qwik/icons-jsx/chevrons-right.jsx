import { component$ } from "@builder.io/qwik";

const IconChevronsRight = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 7 12 12 7 17" /><polyline points="13 7 18 12 13 17" /></svg>;
});

export default IconChevronsRight;