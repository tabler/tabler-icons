import { component$ } from "@builder.io/qwik";

const IconGenderEpicene = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-epicene" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072z" /><path d="M15.536 15.535l5.464 -5.535" /><path d="M3 14l5.464 -5.535" /><path d="M12 12h.01" /></svg>;
});

export default IconGenderEpicene;