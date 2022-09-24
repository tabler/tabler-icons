import { component$ } from "@builder.io/qwik";

const IconCell = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cell" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4l-4 2v5l4 2l4 -2v-5z" /><path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" /><path d="M8 13v5l4 2l4 -2v-5" /></svg>;
});

export default IconCell;