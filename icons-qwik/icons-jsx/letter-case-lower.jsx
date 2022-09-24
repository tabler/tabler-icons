import { component$ } from "@builder.io/qwik";

const IconLetterCaseLower = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-case-lower" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6.5} cy={15.5} r={3.5} /><path d="M10 12v7" /><circle cx={17.5} cy={15.5} r={3.5} /><path d="M21 12v7" /></svg>;
});

export default IconLetterCaseLower;