import { component$ } from "@builder.io/qwik";

const IconBrandBackbone = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-backbone" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 20l14 -8l-14 -8z" /><path d="M19 20l-14 -8l14 -8z" /></svg>;
});

export default IconBrandBackbone;