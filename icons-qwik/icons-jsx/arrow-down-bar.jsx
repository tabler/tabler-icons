import { component$ } from "@builder.io/qwik";

const IconArrowDownBar = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-bar" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3v18" /><path d="M9 18l3 3l3 -3" /><path d="M9 3h6" /></svg>;
});

export default IconArrowDownBar;