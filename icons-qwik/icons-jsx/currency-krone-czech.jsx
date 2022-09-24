import { component$ } from "@builder.io/qwik";

const IconCurrencyKroneCzech = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-krone-czech" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 6v12" /><path d="M5 12c3.5 0 6 -3 6 -6" /><path d="M5 12c3.5 0 6 3 6 6" /><path d="M19 6l-2 2l-2 -2" /><path d="M19 12h-2a3 3 0 0 0 0 6h2" /></svg>;
});

export default IconCurrencyKroneCzech;