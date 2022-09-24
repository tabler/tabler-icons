import { component$ } from "@builder.io/qwik";

const IconCreativeCommonsNc = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-creative-commons-nc" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={9} /><path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" /><path d="M12 7v2" /><path d="M12 15v2" /><path d="M6 6l3 3" /><path d="M15 15l3 3" /></svg>;
});

export default IconCreativeCommonsNc;