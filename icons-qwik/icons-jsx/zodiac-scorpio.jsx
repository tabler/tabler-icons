import { component$ } from "@builder.io/qwik";

const IconZodiacScorpio = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-scorpio" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4a2 2 0 0 1 2 2v9" /><path d="M5 6a2 2 0 0 1 4 0v9" /><path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" /></svg>;
});

export default IconZodiacScorpio;