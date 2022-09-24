import { component$ } from "@builder.io/qwik";

const IconChartCircles = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-circles" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={9.5} cy={9.5} r={5.5} /><circle cx={14.5} cy={14.5} r={5.5} /></svg>;
});

export default IconChartCircles;