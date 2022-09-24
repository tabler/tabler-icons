import { component$ } from "@builder.io/qwik";

const IconAtom2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-atom-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={3} /><line x1={12} y1={21} x2={12} y2={21.01} /><line x1={3} y1={9} x2={3} y2={9.01} /><line x1={21} y1={9} x2={21} y2={9.01} /><path d="M8 20.1a9 9 0 0 1 -5 -7.1" /><path d="M16 20.1a9 9 0 0 0 5 -7.1" /><path d="M6.2 5a9 9 0 0 1 11.4 0" /></svg>;
});

export default IconAtom2;