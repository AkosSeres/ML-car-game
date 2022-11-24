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
        >{mode.isTraining
            ? "Stop training"
            : mode.generationCount === 1
            ? "Start training"
            : "Resume training"}</button
    >
    {#if mode.generationCount !== 1 || mode.isTraining}
        <button
            on:click={() => {
                if (mode.isTraining) mode.timeLeft = 0;
            }}
            type="button"
            data-tooltip-target="tooltip-gen-progress"
            class="w-full overflow-clip {mode.isTraining
                ? 'hover:opacity-80'
                : 'cursor-not-allowed'} transition-opacity duration-300 ease-in-out block mx-auto text-md border border-white rounded-full relative font-medium text-center my-3"
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
        {#if mode.isTraining}
            <Tooltip
                triggeredBy="[data-tooltip-target='tooltip-gen-progress']"
                placement="left"
            >
                Click to skip to the next generation</Tooltip
            >
        {/if}
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

<label
    for="population-size-range"
    class="block mb-1 mt-3 text-sm font-medium text-gray-300"
>
    Population size: <b>{mode.populationSize}</b>
    <span
        class="inline-flex my-auto my-auto justify-center items-center ml-2 w-[1.25em] h-[1.25em] font-bold text-black bg-orange-300 rounded-full"
    >
        !
    </span>
    <Tooltip placement="left"
        ><div class="max-w-sm text-justify">
            Decrease the population size if you're experiencing lag. This will
            only take effect after you reset the population with the button down
            below.
        </div></Tooltip
    >
</label>
<input
    id="population-size-range"
    type="range"
    min="10"
    max="200"
    step="10"
    bind:value={mode.populationSize}
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>

<div class="block mt-5 mx-auto text-center">
    <button
        on:click={() => {
            mode.resetPopulation();
        }}
        class="inline-flex items-center justify-center p-0.5 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
        <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
            Reset population
        </span>
    </button>
</div>

<div class="block mt-2 mx-auto mb-5 text-center">
    <button
        on:click={() => {
            mode.loadTeachedModelToPopulation();
        }}
        class="inline-flex items-center justify-center p-0.5 overflow-hidden font-bold text-sm text-gray-900 rounded-lg group bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
        <span
            class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
            Initialize population<br /> from teached model
        </span>
    </button>
</div>

<label
    for="chase-first-toggle"
    class="inline-flex relative items-center cursor-pointer mb-4"
>
    <input
        type="checkbox"
        value=""
        bind:checked={mode.chaseFirstCar}
        on:change={(e) => {
            // @ts-ignore
            if (!e.target.checked) mode.gameWorld.resetCamera();
        }}
        id="chase-first-toggle"
        class="sr-only peer"
    />
    <div
        class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
    />
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Chase first car</span
    >

    <!-- <div class="block text-center ml-2">
        <button
            on:click={() => {
                mode.gameWorld.resetCamera();
            }}
            class="inline-flex items-center text-center justify-center p-0.5 mb-0 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-indigo-400 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 block mx-auto"
        >
            <span
                class="relative py-0.25 px-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
            >
                Reset camera
            </span>
        </button>
    </div> -->
</label>
