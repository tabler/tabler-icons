import { component$ } from "@builder.io/qwik";

const IconWorldLongitude = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-longitude" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M11.5 3a11.2 11.2 0 0 0 0 18" /><path d="M12.5 3a11.2 11.2 0 0 1 0 18" /><line x1={12} y1={3} x2={12} y2={21} /></svg>;
});

export default IconWorldLongitude;