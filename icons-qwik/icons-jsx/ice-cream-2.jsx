import { component$ } from "@builder.io/qwik";

const IconIceCream2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ice-cream-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.657 11.004a6 6 0 1 0 -11.315 0" /><path d="M6.342 11l5.658 11l5.657 -10.996z" /></svg>;
});

export default IconIceCream2;