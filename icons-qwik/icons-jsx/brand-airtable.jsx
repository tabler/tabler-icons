import { component$ } from "@builder.io/qwik";

const IconBrandAirtable = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-airtable" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10v8l7 -3v-2.6z" /><path d="M3 6l9 3l9 -3l-9 -3z" /><path d="M14 12.3v8.7l7 -3v-8z" /></svg>;
});

export default IconBrandAirtable;