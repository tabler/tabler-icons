import { component$ } from "@builder.io/qwik";

const IconScissors = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scissors" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={7} r={3} /><circle cx={6} cy={17} r={3} /><line x1={8.6} y1={8.6} x2={19} y2={19} /><line x1={8.6} y1={15.4} x2={19} y2={5} /></svg>;
});

export default IconScissors;