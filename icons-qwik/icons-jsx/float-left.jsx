import { component$ } from "@builder.io/qwik";

const IconFloatLeft = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-float-left" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect width={6} height={6} x={4} y={5} rx={1} /><line x1={14} y1={7} x2={20} y2={7} /><line x1={14} y1={11} x2={20} y2={11} /><line x1={4} y1={15} x2={20} y2={15} /><line x1={4} y1={19} x2={20} y2={19} /></svg>;
});

export default IconFloatLeft;