import { component$ } from "@builder.io/qwik";

const IconCurrencyRupeeNepalese = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-rupee-nepalese" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" /><path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" /></svg>;
});

export default IconCurrencyRupeeNepalese;