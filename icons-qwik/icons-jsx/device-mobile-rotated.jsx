import { component$ } from "@builder.io/qwik";

const IconDeviceMobileRotated = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-rotated" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={6} width={18} height={12} rx={2} /><path d="M20 11v2" /><path d="M7 12h-.01" /></svg>;
});

export default IconDeviceMobileRotated;