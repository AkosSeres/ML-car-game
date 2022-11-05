<script lang="ts">
    import type { PlayMode } from "./PlayMode";

    export let mode: PlayMode;
</script>

<label
    for="chase-mode-toggle"
    class="inline-flex relative items-center cursor-pointer mb-4"
>
    <input
        type="checkbox"
        value=""
        bind:checked={mode.chaseMode}
        id="chase-mode-toggle"
        class="sr-only peer"
    />
    <div
        class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
    />
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Chase camera</span
    >
</label><br />

<label
    for="show-sensors-toggle"
    class="inline-flex relative items-center cursor-pointer"
>
    <input
        type="checkbox"
        value=""
        bind:checked={mode.showSensors}
        id="show-sensors-toggle"
        class="sr-only peer"
    />
    <div
        class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
    />
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Visualize sensors</span
    >
</label>

<hr
    class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
/>
