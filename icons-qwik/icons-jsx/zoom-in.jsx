import { component$ } from "@builder.io/qwik";

const IconZoomIn = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={10} r={7} /><line x1={7} y1={10} x2={13} y2={10} /><line x1={10} y1={7} x2={10} y2={13} /><line x1={21} y1={21} x2={15} y2={15} /></svg>;
});

export default IconZoomIn;