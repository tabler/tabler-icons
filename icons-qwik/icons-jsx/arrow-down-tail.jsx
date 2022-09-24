import { component$ } from "@builder.io/qwik";

const IconArrowDownTail = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-tail" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6v15" /><path d="M9 18l3 3l3 -3" /><path d="M9 3l3 3l3 -3" /></svg>;
});

export default IconArrowDownTail;