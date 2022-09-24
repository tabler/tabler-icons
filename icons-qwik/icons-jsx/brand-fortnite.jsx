import { component$ } from "@builder.io/qwik";

const IconBrandFortnite = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-fortnite" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" /></svg>;
});

export default IconBrandFortnite;