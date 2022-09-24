import { component$ } from "@builder.io/qwik";

const IconSubtask = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-subtask" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={6} y1={9} x2={12} y2={9} /><line x1={4} y1={5} x2={8} y2={5} /><path d="M6 5v11a1 1 0 0 0 1 1h5" /><rect x={12} y={7} width={8} height={4} rx={1} /><rect x={12} y={15} width={8} height={4} rx={1} /></svg>;
});

export default IconSubtask;