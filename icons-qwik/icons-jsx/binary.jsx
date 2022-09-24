import { component$ } from "@builder.io/qwik";

const IconBinary = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-binary" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 10v-5h-1m8 14v-5h-1" /><rect x={15} y={5} width={3} height={5} rx={0.5} /><rect x={10} y={14} width={3} height={5} rx={0.5} /><path d="M6 10h.01m-.01 9h.01" /></svg>;
});

export default IconBinary;