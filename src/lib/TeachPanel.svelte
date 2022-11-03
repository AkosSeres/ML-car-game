<script lang="ts">
    import type { TeachMode } from "./TeachMode";
    import EnvironmentSetter from "./EnvironmentSetter.svelte";

    export let mode: TeachMode;
</script>

<div class="flex rounded-md shadow-sm" role="group">
    <button
        type="button"
        class="focus:outline-none text-white grow flex-1 transition py-1 px-2 text-sm focus:ring-red-300 font-bold rounded-l-lg border border-gray-200 focus:z-10 focus:ring-1 bg-red-600 border-gray-600 text-white hover:text-white hover:bg-red-700"
    >
        Record input
    </button>
    <button
        type="button"
        class="text-purple-700 hover:text-white grow flex-1 transition border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-r-lg text-sm px-2 py-1 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >Test AI car</button
    >
</div>

<hr
    class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
/>

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

<div class="flex justify-between mb-1">
    <span class="text-base font-medium text-blue-700 dark:text-white"
        >Sensors</span
    >
</div>
{#each mode.sensorData as sensorDatum, idx}
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
            id={"arrow-length-indicator-" + idx}
            class="bg-blue-600 mb-px bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style="width: {sensorDatum.distance * 100}%"
        >
            {sensorDatum.distance.toFixed(2)}
        </div>
    </div>
{/each}

<div class="flex justify-between mt-4 mb-1">
    <span class="text-base font-medium text-blue-700 dark:text-white"
        >Velocity: <span id="velocity-element" /></span
    >
</div>

<hr
    class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
/>

<EnvironmentSetter gameWorld={mode.gameWorld} />
