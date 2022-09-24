import { component$ } from "@builder.io/qwik";

const IconBuildingCarousel = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-carousel" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={12} r={6} /><circle cx={5} cy={8} r={2} /><circle cx={12} cy={4} r={2} /><circle cx={19} cy={8} r={2} /><circle cx={5} cy={16} r={2} /><circle cx={19} cy={16} r={2} /><path d="M8 22l4 -10l4 10" /></svg>;
});

export default IconBuildingCarousel;