import { component$ } from "@builder.io/qwik";

const IconBrandSublimeText = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-sublime-text" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 8l-14 4.5v-5.5l14 -4.5z" /><path d="M19 17l-14 4.5v-5.5l14 -4.5z" /><path d="M19 11.5l-14 -4.5" /><path d="M5 12.5l14 4.5" /></svg>;
});

export default IconBrandSublimeText;