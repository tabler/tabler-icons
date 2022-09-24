import { component$ } from "@builder.io/qwik";

const IconTrendingDown2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 6h5l7 10h6" /><path d="M18 19l3 -3l-3 -3" /></svg>;
});

export default IconTrendingDown2;