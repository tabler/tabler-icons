import { component$ } from "@builder.io/qwik";

const IconWifi1 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi-1" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={18} x2={12.01} y2={18} /><path d="M9.172 15.172a4 4 0 0 1 5.656 0" /></svg>;
});

export default IconWifi1;