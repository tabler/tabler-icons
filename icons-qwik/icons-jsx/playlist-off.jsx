import { component$ } from "@builder.io/qwik";

const IconPlaylistOff = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 14a3 3 0 1 0 3 3" /><path d="M17 13v-9h4" /><path d="M13 5h-4m-4 0h-2" /><path d="M3 9h6" /><path d="M9 13h-6" /><path d="M3 3l18 18" /></svg>;
});

export default IconPlaylistOff;