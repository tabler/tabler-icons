import { component$ } from "@builder.io/qwik";

const IconBluetooth = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bluetooth" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="7 8 17 16 12 20 12 4 17 8 7 16" /></svg>;
});

export default IconBluetooth;