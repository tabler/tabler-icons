import { component$ } from "@builder.io/qwik";

const IconBrandCampaignmonitor = component$(
({
    size = 24,
    color = "currentColor",
    stroke = 2,
    ...props
}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-campaignmonitor" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" /></svg>;
});

export default IconBrandCampaignmonitor;