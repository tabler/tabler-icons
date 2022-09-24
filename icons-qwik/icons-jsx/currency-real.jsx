import { component$ } from "@builder.io/qwik";

const IconCurrencyReal = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-real" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" /><path d="M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6" /><path d="M18 6v-2" /><path d="M17 20v-2" /></svg>;
});

export default IconCurrencyReal;