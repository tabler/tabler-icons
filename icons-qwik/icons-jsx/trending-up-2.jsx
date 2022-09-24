import { component$ } from "@builder.io/qwik";

const IconTrendingUp2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 5l3 3l-3 3" /><path d="M3 18h5l7 -10h6" /></svg>;
});

export default IconTrendingUp2;