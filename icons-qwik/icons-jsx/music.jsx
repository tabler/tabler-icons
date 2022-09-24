import { component$ } from "@builder.io/qwik";

const IconMusic = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-music" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={17} r={3} /><circle cx={16} cy={17} r={3} /><polyline points="9 17 9 4 19 4 19 17" /><line x1={9} y1={8} x2={19} y2={8} /></svg>;
});

export default IconMusic;