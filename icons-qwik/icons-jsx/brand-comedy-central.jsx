import { component$ } from "@builder.io/qwik";

const IconBrandComedyCentral = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-comedy-central" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.343 17.657a8 8 0 1 0 0 -11.314" /><path d="M13.828 9.172a4 4 0 1 0 0 5.656" /></svg>;
});

export default IconBrandComedyCentral;