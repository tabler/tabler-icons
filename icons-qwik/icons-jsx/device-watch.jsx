import { component$ } from "@builder.io/qwik";

const IconDeviceWatch = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={6} y={6} width={12} height={12} rx={3} /><path d="M9 18v3h6v-3" /><path d="M9 6v-3h6v3" /></svg>;
});

export default IconDeviceWatch;