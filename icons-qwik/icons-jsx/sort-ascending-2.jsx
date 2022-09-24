import { component$ } from "@builder.io/qwik";

const IconSortAscending2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-ascending-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 9l3 -3l3 3" /><rect x={5} y={5} width={5} height={5} rx={0.5} /><rect x={5} y={14} width={5} height={5} rx={0.5} /><path d="M17 6v12" /></svg>;
});

export default IconSortAscending2;