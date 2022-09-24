import { component$ } from "@builder.io/qwik";

const IconCircleNumber0 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-number-0" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" /></svg>;
});

export default IconCircleNumber0;