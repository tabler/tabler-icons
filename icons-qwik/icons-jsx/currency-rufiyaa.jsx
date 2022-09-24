import { component$ } from "@builder.io/qwik";

const IconCurrencyRufiyaa = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-rufiyaa" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 16h.01" /><path d="M4 16c9.5 -4 11.5 -8 14 -9" /><path d="M12 8l5 3" /></svg>;
});

export default IconCurrencyRufiyaa;