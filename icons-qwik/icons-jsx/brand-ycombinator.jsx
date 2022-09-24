import { component$ } from "@builder.io/qwik";

const IconBrandYcombinator = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-ycombinator" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={4} y={4} width={16} height={16} rx={2} /><path d="M8 7.002l4 5.998l4 -6" /><line x1={12} y1={17} x2={12} y2={13} /></svg>;
});

export default IconBrandYcombinator;