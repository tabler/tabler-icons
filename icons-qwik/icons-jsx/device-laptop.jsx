import { component$ } from "@builder.io/qwik";

const IconDeviceLaptop = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-laptop" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={19} x2={21} y2={19} /><rect x={5} y={6} width={14} height={10} rx={1} /></svg>;
});

export default IconDeviceLaptop;