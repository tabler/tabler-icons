import { component$ } from "@builder.io/qwik";

const IconBrandValorant = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-valorant" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.5 14h4.5l2 -2v-6z" /><path d="M9 19h5l-11 -13v6z" /></svg>;
});

export default IconBrandValorant;