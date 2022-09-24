import { component$ } from "@builder.io/qwik";

const IconWall = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wall" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M4 8h16" /><path d="M20 12h-16" /><path d="M4 16h16" /><path d="M9 4v4" /><path d="M14 8v4" /><path d="M8 12v4" /><path d="M16 12v4" /><path d="M11 16v4" /></svg>;
});

export default IconWall;