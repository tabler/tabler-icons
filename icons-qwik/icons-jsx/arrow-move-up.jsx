import { component$ } from "@builder.io/qwik";

const IconArrowMoveUp = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-move-up" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13v-10" /><path d="M9 6l3 -3l3 3" /><path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z" /></svg>;
});

export default IconArrowMoveUp;