import { component$ } from "@builder.io/qwik";

const IconCurrency = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={7} /><path d="M4 4l3 3" /><path d="M20 4l-3 3" /><path d="M4 20l3 -3" /><path d="M20 20l-3 -3" /></svg>;
});

export default IconCurrency;