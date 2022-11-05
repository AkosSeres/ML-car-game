<script lang="ts">
    import type { TrainMode } from "./TrainMode";

    export let mode: TrainMode;
</script>

<button
    type="button"
    on:click={() => {
        if (mode.isTraining) mode.stopTraining();
        else mode.startTraining();
    }}
    class="block grow mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >{mode.isTraining ? "Stop training" : "Start training"}</button
>

<label
    for="max-run-time-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Time per generation: <b>{mode.maxRunTime}</b> seconds</label
>
<input
    id="max-run-time-range"
    type="range"
    min="2"
    max="120"
    step="1"
    bind:value={mode.maxRunTime}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="max-run-time-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Do crossover with top <b>{Math.round(mode.topRatio * 100)}</b>%</label
>
<input
    id="max-run-time-range"
    type="range"
    min="0.01"
    max="1.0"
    step="0.01"
    bind:value={mode.topRatio}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="max-run-time-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Crossover rate: <b>{Math.round(mode.crossoverRate * 100)}</b>%</label
>
<input
    id="max-run-time-range"
    type="range"
    min="0.0"
    max="1.0"
    step="0.01"
    bind:value={mode.crossoverRate}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="max-run-time-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Mutation rate: <b>{Math.round(mode.mutationRate * 100)}</b>%</label
>
<input
    id="max-run-time-range"
    type="range"
    min="0.0"
    max="1.0"
    step="0.01"
    bind:value={mode.mutationRate}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>
