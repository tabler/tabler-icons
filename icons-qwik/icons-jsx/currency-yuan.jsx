import { component$ } from "@builder.io/qwik";

const IconCurrencyYuan = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-yuan" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 19v-7l-5 -7" /><path d="M17 5l-5 7" /><path d="M8 13h8" /></svg>;
});

export default IconCurrencyYuan;