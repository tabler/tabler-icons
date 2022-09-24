import { component$ } from "@builder.io/qwik";

const IconTextIncrease = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-increase" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" /><path d="M4 13h7" /><path d="M18 9v6" /><path d="M21 12h-6" /></svg>;
});

export default IconTextIncrease;