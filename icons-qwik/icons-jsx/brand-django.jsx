import { component$ } from "@builder.io/qwik";

const IconBrandDjango = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-django" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={3} width={18} height={18} rx={3} /><path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" /><path d="M16 7v.01" /><path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414" /></svg>;
});

export default IconBrandDjango;