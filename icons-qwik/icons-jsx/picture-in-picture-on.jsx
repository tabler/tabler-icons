import { component$ } from "@builder.io/qwik";

const IconPictureInPictureOn = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-picture-in-picture-on" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" /><rect x={14} y={14} width={7} height={5} rx={1} /><line x1={7} y1={9} x2={11} y2={13} /><path d="M8 13h3v-3" /></svg>;
});

export default IconPictureInPictureOn;