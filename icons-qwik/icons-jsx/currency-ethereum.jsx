import { component$ } from "@builder.io/qwik";

const IconCurrencyEthereum = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ethereum" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12l6 -9l6 9l-6 9z" /><path d="M6 12l6 -3l6 3l-6 2z" /></svg>;
});

export default IconCurrencyEthereum;