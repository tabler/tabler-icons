import { component$ } from "@builder.io/qwik";

const IconGenderAndrogyne = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-androgyne" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 11l6 -6" /><circle cx={9} cy={15} r={5} /><path d="M19 9v-4h-4" /><path d="M16.5 10.5l-3 -3" /></svg>;
});

export default IconGenderAndrogyne;