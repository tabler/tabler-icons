import { component$ } from "@builder.io/qwik";

const IconChartArcs = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-arcs" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={1} /><path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" /><path d="M3 12a9 9 0 1 0 9 -9" /></svg>;
});

export default IconChartArcs;