import { component$ } from "@builder.io/qwik";

const IconArrowNarrowUp = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-up" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={16} y1={9} x2={12} y2={5} /><line x1={8} y1={9} x2={12} y2={5} /></svg>;
});

export default IconArrowNarrowUp;