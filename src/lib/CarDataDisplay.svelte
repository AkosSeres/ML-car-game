<script lang="ts">
    import type { PlayMode } from "./PlayMode";

    export let mode: PlayMode;
</script>

{#if mode.car}
    <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white"
            >Sensors</span
        >
        <span class="text-xs font-medium my-auto text-blue-700 dark:text-white"
            >{mode.sensorData.length} sensors</span
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
{/if}
