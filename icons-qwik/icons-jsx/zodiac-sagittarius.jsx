import { component$ } from "@builder.io/qwik";

const IconZodiacSagittarius = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-sagittarius" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={20} x2={20} y2={4} /><path d="M13 4h7v7" /><line x1={6.5} y1={12.5} x2={11.5} y2={17.5} /></svg>;
});

export default IconZodiacSagittarius;