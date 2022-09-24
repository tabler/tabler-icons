import { component$ } from "@builder.io/qwik";

const IconArrowLoopRight2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-loop-right-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" /><path d="M17 16l4 -4l-4 -4" /></svg>;
});

export default IconArrowLoopRight2;