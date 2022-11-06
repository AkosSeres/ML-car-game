<script lang="ts">
    import type { TrainMode } from "./TrainMode";
    import { Tooltip } from "flowbite-svelte";

    export let mode: TrainMode;

    let rerenderTrigger = false;
    const rerender = () => {
        rerenderTrigger = !rerenderTrigger;
    };
    // @ts-ignore
    window.rerenderTrainPanel = rerender;
</script>

{#key rerenderTrigger}
    <button
        type="button"
        on:click={() => {
            if (mode.isTraining) mode.stopTraining();
            else mode.startTraining();
            mode.rerenderTrainPanel();
        }}
        class="block grow mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition-colors duration-200 ease-in-out"
        >{mode.isTraining ? "Stop training" : "Start training"}</button
    >
    {#if mode.generationCount > 1 || mode.isTraining}
        <button
            on:click={() => {
                mode.timeLeft = 0;
            }}
            type="button"
            data-tooltip-target="tooltip-gen-progress"
            class="w-full overflow-clip hover:opacity-80 transition-opacity duration-300 ease-in-out block mx-auto text-md border border-white rounded-full relative font-medium text-center my-3"
        >
            <div
                id="generation-progress-bar"
                class="max-w-full h-full block absolute top-0 left-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full z-[-1]"
                style="width: {(mode.timeLeft / mode.lastMaxRunTime) * 100}%"
            />
            <p class="text-gray-300 mix-blend-difference">
                Generation <b>{mode.generationCount}</b>
            </p>
        </button>
        <Tooltip
            triggeredBy="[data-tooltip-target='tooltip-gen-progress']"
            placement="left"
        >
            Click to skip to the next generation</Tooltip
        >
    {/if}
{/key}

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
    for="top-ratio-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Do crossover with top <b>{Math.round(mode.topRatio * 100)}</b>%</label
>
<input
    id="top-ratio-range"
    type="range"
    min="0.01"
    max="1.0"
    step="0.01"
    bind:value={mode.topRatio}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="crossover-rate-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Crossover rate: <b>{Math.round(mode.crossoverRate * 100)}</b>%</label
>
<input
    id="crossover-rate-range"
    type="range"
    min="0.0"
    max="1.0"
    step="0.01"
    bind:value={mode.crossoverRate}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="mutation-rate-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Mutation rate: <b>{Math.round(mode.mutationRate * 100)}</b>%</label
>
<input
    id="mutation-rate-range"
    type="range"
    min="0.0"
    max="1.0"
    step="0.01"
    bind:value={mode.mutationRate}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<label
    for="mutation-strength-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
    >Mutation strength: <b>{Math.round(mode.mutationStrength * 100)}</b></label
>
<input
    id="mutation-strength-range"
    type="range"
    min="0.0"
    max="0.15"
    step="0.01"
    bind:value={mode.mutationStrength}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>
