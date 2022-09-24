import { component$ } from "@builder.io/qwik";

const IconTimeline = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-timeline" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 16l6 -7l5 5l5 -6" /><circle cx={15} cy={14} r={1} /><circle cx={10} cy={9} r={1} /><circle cx={4} cy={16} r={1} /><circle cx={20} cy={8} r={1} /></svg>;
});

export default IconTimeline;