import { component$ } from "@builder.io/qwik";

const IconArrowBearRight2 = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bear-right-2" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 3h5v5" /><path d="M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" /><path d="M4 5l4.5 4.5" /></svg>;
});

export default IconArrowBearRight2;