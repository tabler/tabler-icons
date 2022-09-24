import { component$ } from "@builder.io/qwik";

const IconCircuitCellPlus = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-cell-plus" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 12h9" /><path d="M15 12h7" /><path d="M11 5v14" /><path d="M15 9v6" /><path d="M3 5h4" /><path d="M5 3v4" /></svg>;
});

export default IconCircuitCellPlus;