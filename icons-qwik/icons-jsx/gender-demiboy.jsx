import { component$ } from "@builder.io/qwik";

const IconGenderDemiboy = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-demiboy" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={10} cy={14} r={5} /><path d="M19 5l-5.4 5.4" /><path d="M19 5h-5" /></svg>;
});

export default IconGenderDemiboy;