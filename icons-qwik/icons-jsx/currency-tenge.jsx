import { component$ } from "@builder.io/qwik";

const IconCurrencyTenge = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-tenge" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5h12" /><path d="M6 9h12" /><path d="M12 9v10" /></svg>;
});

export default IconCurrencyTenge;