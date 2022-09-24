import { component$ } from "@builder.io/qwik";

const IconNumber = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-number" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v-10l7 10v-10" /><path d="M15 17h5" /><ellipse cx={17.5} cy={10} rx={2.5} ry={3} /></svg>;
});

export default IconNumber;