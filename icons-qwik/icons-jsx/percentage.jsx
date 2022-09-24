import { component$ } from "@builder.io/qwik";

const IconPercentage = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-percentage" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={17} cy={17} r={1} /><circle cx={7} cy={7} r={1} /><line x1={6} y1={18} x2={18} y2={6} /></svg>;
});

export default IconPercentage;