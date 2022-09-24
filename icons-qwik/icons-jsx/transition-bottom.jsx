import { component$ } from "@builder.io/qwik";

const IconTransitionBottom = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-bottom" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" /><rect x={3} y={3} width={18} height={6} rx={3} /><path d="M12 9v8" /><path d="M9 14l3 3l3 -3" /></svg>;
});

export default IconTransitionBottom;