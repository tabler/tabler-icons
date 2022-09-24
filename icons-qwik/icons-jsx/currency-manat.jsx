import { component$ } from "@builder.io/qwik";

const IconCurrencyManat = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-manat" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 19v-7a5 5 0 1 1 10 0v7" /><path d="M12 5v14" /></svg>;
});

export default IconCurrencyManat;