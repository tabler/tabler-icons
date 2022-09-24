import { component$ } from "@builder.io/qwik";

const IconBrandPatreon = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-patreon" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 3h3v18h-3z" /><circle cx={15} cy={9.5} r={6.5} /></svg>;
});

export default IconBrandPatreon;