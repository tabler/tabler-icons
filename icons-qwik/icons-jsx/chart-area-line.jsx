import { component$ } from "@builder.io/qwik";

const IconChartAreaLine = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-area-line" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" /><polyline points="4 12 7 8 11 10 16 4 20 8" /></svg>;
});

export default IconChartAreaLine;