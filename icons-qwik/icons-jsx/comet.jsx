import { component$ } from "@builder.io/qwik";

const IconComet = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-comet" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" /><line x1={4} y1={4} x2={11} y2={11} /><line x1={9} y1={4} x2={12.5} y2={7.5} /><line x1={4} y1={9} x2={7.5} y2={12.5} /></svg>;
});

export default IconComet;