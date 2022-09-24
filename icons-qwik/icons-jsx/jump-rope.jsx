import { component$ } from "@builder.io/qwik";

const IconJumpRope = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-jump-rope" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" /><rect x={16} y={3} width={4} height={7} rx={2} /><rect x={4} y={14} width={4} height={7} rx={2} /></svg>;
});

export default IconJumpRope;