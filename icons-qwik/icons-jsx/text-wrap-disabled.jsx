import { component$ } from "@builder.io/qwik";

const IconTextWrapDisabled = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-wrap-disabled" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={6} x2={14} y2={6} /><line x1={4} y1={18} x2={14} y2={18} /><path d="M4 12h17l-3 -3m0 6l3 -3" /></svg>;
});

export default IconTextWrapDisabled;