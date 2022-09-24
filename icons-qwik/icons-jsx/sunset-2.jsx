import { component$ } from "@builder.io/qwik";

const IconSunset2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sunset-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 13h1" /><path d="M20 13h1" /><path d="M5.6 6.6l.7 .7" /><path d="M18.4 6.6l-.7 .7" /><path d="M8 13a4 4 0 1 1 8 0" /><path d="M3 17h18" /><path d="M7 20h5" /><path d="M16 20h1" /><path d="M12 5v-1" /></svg>;
});

export default IconSunset2;