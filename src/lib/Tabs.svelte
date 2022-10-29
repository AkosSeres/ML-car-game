<script>
    import { Tabs, TabItem } from "flowbite-svelte";
    import DrawPanel from "./DrawPanel.svelte";
    import PlayPanel from "./PlayPanel.svelte";
    import TrainPanel from "./TrainPanel.svelte";
</script>

<Tabs
    style="full"
    defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700"
>
    <TabItem class="w-full" open>
        <span slot="title">Draw</span>
        <DrawPanel />
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Play</span>
        <PlayPanel />
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Train</span>
        <TrainPanel />
    </TabItem>
</Tabs>
