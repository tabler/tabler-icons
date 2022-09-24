import { component$ } from "@builder.io/qwik";

const IconClock2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={1} /><path d="M12 7v5l3 3" /><path d="M4 12h1" /><path d="M19 12h1" /><path d="M12 19v1" /></svg>;
});

export default IconClock2;