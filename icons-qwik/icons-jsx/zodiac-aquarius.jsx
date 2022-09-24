import { component$ } from "@builder.io/qwik";

const IconZodiacAquarius = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-aquarius" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" /><path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" /></svg>;
});

export default IconZodiacAquarius;