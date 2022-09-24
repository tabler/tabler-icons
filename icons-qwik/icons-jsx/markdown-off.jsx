import { component$ } from "@builder.io/qwik";

const IconMarkdownOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-markdown-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h10a2 2 0 0 1 2 2v10" /><path d="M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -1.995" /><path d="M7 15v-6l2 2l.995 -.995m1.005 .995v4" /><path d="M17.5 13.5l.5 -.5m-2 -.997v-3.003" /><path d="M3 3l18 18" /></svg>;
});

export default IconMarkdownOff;