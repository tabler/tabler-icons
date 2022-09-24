import { component$ } from "@builder.io/qwik";

const IconCircles = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circles" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={7} r={4} /><circle cx={6.5} cy={17} r={4} /><circle cx={17.5} cy={17} r={4} /></svg>;
});

export default IconCircles;