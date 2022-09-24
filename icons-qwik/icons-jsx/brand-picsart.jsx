import { component$ } from "@builder.io/qwik";

const IconBrandPicsart = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-picsart" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={9} r={7} /><circle cx={12} cy={9} r={3} /><path d="M5 9v11a2 2 0 1 0 4 0v-4.5" /></svg>;
});

export default IconBrandPicsart;