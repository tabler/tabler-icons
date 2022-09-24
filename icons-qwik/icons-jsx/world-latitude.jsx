import { component$ } from "@builder.io/qwik";

const IconWorldLatitude = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-latitude" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><line x1={4.6} y1={7} x2={19.4} y2={7} /><line x1={3} y1={12} x2={21} y2={12} /><line x1={4.6} y1={17} x2={19.4} y2={17} /></svg>;
});

export default IconWorldLatitude;