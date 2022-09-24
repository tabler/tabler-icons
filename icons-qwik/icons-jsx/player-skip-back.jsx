import { component$ } from "@builder.io/qwik";

const IconPlayerSkipBack = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-skip-back" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 5v14l-12 -7z" /><line x1={4} y1={5} x2={4} y2={19} /></svg>;
});

export default IconPlayerSkipBack;