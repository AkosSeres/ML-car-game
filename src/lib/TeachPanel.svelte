<script lang="ts">
    import { TeachMode, TeachModeState } from "./TeachMode";
    import EnvironmentSetter from "./EnvironmentSetter.svelte";

    export let mode: TeachMode;

    let rerenderTrigger = false;
    const rerender = () => {
        rerenderTrigger = !rerenderTrigger;
    };
    // @ts-ignore
    window.rerenderTeachPanel = rerender;
</script>

{#key rerenderTrigger}
    <div class="flex rounded-md shadow-sm" role="group">
        <button
            on:click={() => {
                if (mode.state == TeachModeState.None) {
                    mode.recordButtonPressed();
                } else if (mode.state == TeachModeState.Teach) {
                    mode.discardButtonPressed();
                }
            }}
            type="button"
            class="focus:outline-none text-white grow flex-1 transition py-1 px-2 text-sm focus:ring-red-300 font-bold rounded-l-lg border border-gray-200 focus:z-10 focus:ring-1 bg-red-600 border-gray-600 text-white hover:text-white hover:bg-red-700"
        >
            {mode.state == TeachModeState.None ? "New recording" : "Discard"}
        </button>
        <button
            on:click={() => {
                if (mode.state == TeachModeState.None) {
                    mode.startAIDemonstration();
                } else if (mode.state == TeachModeState.Demonstrate) {
                    mode.stopAIDemonstration();
                }
            }}
            type="button"
            class="text-purple-700 hover:text-white grow flex-1 transition border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-bold rounded-r-lg text-sm px-2 py-1 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
            >Test AI car</button
        >
    </div>

    {#if mode.state != TeachModeState.None || mode.recording.length > 0}
        <div style="display: hidden;" class="flex mt-4 mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white"
                ><span id="recorded-count-span">{mode.recording.length}</span
                ></span
            >
            &nbsp;{mode.state === TeachModeState.Teach ||
            mode.previousState === TeachModeState.Teach
                ? "inputs recorded"
                : "corrections recorded"}
        </div>
    {/if}

    {#if mode.state == TeachModeState.None && mode.recording.length > 0}
        <button
            on:click={() => {
                mode.storeRecording();
            }}
            class="inline-flex items-center text-center justify-center p-0.5 mb-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-indigo-400 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 block mx-auto"
        >
            <span
                class="relative py-1 px-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
                Store recording
            </span>
        </button>
    {/if}

    <hr
        class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
    />

    <div style="display: hidden;" class="flex justify-between mt-4 mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white"
            >{mode.storedRecording.length} inputs stored.
        </span>
    </div>

    {#if mode.storedRecording.length > 0 && !mode.isCurrentlyFitting}
        <button
            on:click={() => {
                mode.trainFromStored();
            }}
            type="button"
            class="block text-red-700 hover:text-white mx-auto border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-2 py-1 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >Train from stored inputs</button
        >
    {/if}

    {#if mode.isCurrentlyFitting}
        <div class="flex justify-between mb-1">
            <span class="text-sm font-light text-blue-700 dark:text-white"
                >Loss: {mode.currentLoss.toFixed(4)}</span
            >
            <span class="text-sm font-medium text-blue-700 dark:text-white"
                >{mode.epochsDone} / {mode.numberOfEpochs} epochs</span
            >
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2.5">
            <div
                class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-2.5 rounded-full"
                style="width: {(mode.epochsDone / mode.numberOfEpochs) * 100}%"
            />
        </div>
    {/if}

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
{/key}
