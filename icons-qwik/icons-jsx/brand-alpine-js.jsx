import { component$ } from "@builder.io/qwik";

const IconBrandAlpineJs = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-alpine-js" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 11.5l4.5 4.5h9l-9 -9z" /><path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" /></svg>;
});

export default IconBrandAlpineJs;