import { component$ } from "@builder.io/qwik";

const IconBrandUnsplash = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-unsplash" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" /></svg>;
});

export default IconBrandUnsplash;