import { component$ } from "@builder.io/qwik";

const IconGripVertical = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grip-vertical" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9} cy={5} r={1} /><circle cx={9} cy={12} r={1} /><circle cx={9} cy={19} r={1} /><circle cx={15} cy={5} r={1} /><circle cx={15} cy={12} r={1} /><circle cx={15} cy={19} r={1} /></svg>;
});

export default IconGripVertical;