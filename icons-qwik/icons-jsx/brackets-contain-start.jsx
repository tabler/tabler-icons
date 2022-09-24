import { component$ } from "@builder.io/qwik";

const IconBracketsContainStart = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brackets-contain-start" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-4v16h4" /><path d="M18 16h-.01" /><path d="M14 16h-.01" /><path d="M10 16h-.01" /></svg>;
});

export default IconBracketsContainStart;