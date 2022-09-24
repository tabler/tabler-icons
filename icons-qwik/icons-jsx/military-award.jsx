import { component$ } from "@builder.io/qwik";

const IconMilitaryAward = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-military-award" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={13} r={4} /><path d="M9 10l-1 -2h-5l2.48 5.788a2 2 0 0 0 1.84 1.212h1.18" /><path d="M15 10l1 -2h5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-1.18" /></svg>;
});

export default IconMilitaryAward;