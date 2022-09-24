import { component$ } from "@builder.io/qwik";

const IconChartInfographic = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-infographic" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={7} cy={7} r={4} /><path d="M7 3v4h4" /><line x1={9} y1={17} x2={9} y2={21} /><line x1={17} y1={14} x2={17} y2={21} /><line x1={13} y1={13} x2={13} y2={21} /><line x1={21} y1={12} x2={21} y2={21} /></svg>;
});

export default IconChartInfographic;