import { component$ } from "@builder.io/qwik";

const IconArticle = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-article" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x={3} y={4} width={18} height={16} rx={2} /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h10" /></svg>;
});

export default IconArticle;