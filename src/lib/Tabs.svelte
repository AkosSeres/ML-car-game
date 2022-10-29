<script>
    import { Tabs, TabItem } from "flowbite-svelte";
</script>

<Tabs
    style="full"
    defaultClass="rounded-xl flex divide-x divide-gray-200 shadow dark:divide-gray-700"
>
    <TabItem class="w-full" open>
        <span slot="title">Draw</span>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Play</span>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </TabItem>
    <TabItem class="w-full">
        <span slot="title">Train</span>
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </TabItem>
</Tabs>
