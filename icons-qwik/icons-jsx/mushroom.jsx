import { component$ } from "@builder.io/qwik";

const IconMushroom = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mushroom" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a0.9 .9 0 0 0 .9 .9h14.2a0.9 .9 0 0 0 .9 -.9z" /><path d="M10 12v7a2 2 0 1 0 4 0v-7" /></svg>;
});

export default IconMushroom;