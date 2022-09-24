import { component$ } from "@builder.io/qwik";

const IconCurrencyForint = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-forint" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 4h-4a3 3 0 0 0 -3 3v12" /><path d="M10 11h-6" /><path d="M16 4v13a2 2 0 0 0 2 2h2" /><path d="M19 9h-5" /></svg>;
});

export default IconCurrencyForint;