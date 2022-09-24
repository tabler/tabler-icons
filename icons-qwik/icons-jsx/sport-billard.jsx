import { component$ } from "@builder.io/qwik";

const IconSportBillard = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sport-billard" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={10} r={2} /><circle cx={12} cy={14} r={2} /><circle cx={12} cy={12} r={8} /></svg>;
});

export default IconSportBillard;