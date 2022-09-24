import { component$ } from "@builder.io/qwik";

const IconTrademark = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trademark" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.5 9h5m-2.5 0v6" /><path d="M13 15v-6l3 4l3 -4v6" /></svg>;
});

export default IconTrademark;