import { component$ } from "@builder.io/qwik";

const IconCellSignal4 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cell-signal-4" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a0.731 .731 0 0 1 1.249 .517v15.269z" /><path d="M16 7v13" /></svg>;
});

export default IconCellSignal4;