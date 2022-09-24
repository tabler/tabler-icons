import { component$ } from "@builder.io/qwik";

const IconDice4 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dice-4" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" /><circle cx={15.5} cy={8.5} r={0.5} fill="currentColor" /><circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" /><circle cx={8.5} cy={15.5} r={0.5} fill="currentColor" /></svg>;
});

export default IconDice4;