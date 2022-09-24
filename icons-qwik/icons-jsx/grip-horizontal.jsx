import { component$ } from "@builder.io/qwik";

const IconGripHorizontal = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grip-horizontal" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={9} r={1} /><circle cx={5} cy={15} r={1} /><circle cx={12} cy={9} r={1} /><circle cx={12} cy={15} r={1} /><circle cx={19} cy={9} r={1} /><circle cx={19} cy={15} r={1} /></svg>;
});

export default IconGripHorizontal;