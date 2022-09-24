import { component$ } from "@builder.io/qwik";

const IconCone2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cone-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><ellipse cx={12} cy={7} rx={7} ry={3} /><path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" /></svg>;
});

export default IconCone2;