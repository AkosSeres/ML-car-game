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
