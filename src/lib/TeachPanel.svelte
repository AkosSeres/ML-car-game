<script lang="ts">
    import { TeachMode, TeachModeState } from "./TeachMode";
    import EnvironmentSetter from "./EnvironmentSetter.svelte";
    import CarDataDisplay from "./CarDataDisplay.svelte";
    import PlayModeSettings from "./PlayModeSettings.svelte";

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

            <div class="block text-center ml-auto mr-1.5">
                <button
                    on:click={() => {
                        mode.storeRecording();
                    }}
                    class="inline-flex items-center text-center justify-center p-0.5 mb-0 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-indigo-400 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 block mx-auto"
                >
                    <span
                        class="relative py-0.25 px-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                    >
                        Store
                    </span>
                </button>
            </div>
        </div>
    {/if}

    <hr
        class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
    />

    <div style="display: hidden;" class="flex justify-between mt-4 mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white"
            >{mode.storedRecording.length} inputs stored. &nbsp;
        </span>
        {#if mode.storedRecording.length > 0 && !mode.isCurrentlyFitting}
            <button
                on:click={() => {
                    mode.emptyStoredRecording();
                }}
                type="button"
                class="block text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 font-bold rounded-full text-sm px-3 py-0.5 text-center ml-auto mr-2 mb-3 focus:ring-yellow-900"
                >Empty store</button
            >
        {/if}
    </div>

    {#if mode.storedRecording.length > 0 && !mode.isCurrentlyFitting}
        <button
            on:click={() => {
                mode.trainFromStored();
            }}
            type="button"
            class="block text-red-700 hover:text-white mx-auto border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-2 py-1 text-center mb-0 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
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
                style="width: {(mode.epochsDone / mode.numberOfEpochs) * 100}%;"
            />
        </div>
    {/if}

    <ul
        class="w-100 mt-4 grid grid-cols-3 flex-row flex-wrap text-sm font-bold rounded-xl border border-gray-600"
    >
        <li
            class="col-span-2 py-2 px-2 rounded-tl-xl border-b border-gray-600 text-gray-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
        >
            Epochs
        </li>
        <input
            type="number"
            min="1"
            max="1000000"
            step="1"
            pattern="\d+"
            bind:value={mode.numberOfEpochs}
            class="col-span-1 p-1 text-gray-900 bg-gray-50 rounded-tr-xl border border-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 sm:text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-900 dark:focus:bg-gray-900"
        />
        <li
            class="col-span-2 py-2 px-2 border-b border-gray-600 text-gray-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
        >
            Batch size
        </li>
        <input
            type="number"
            min="1"
            max="256"
            step="1"
            pattern="\d+"
            bind:value={mode.batchSize}
            class="col-span-1 p-1 text-gray-900 bg-gray-50 border border-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 sm:text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-900 dark:focus:bg-gray-900"
        />
        <li
            class="col-span-2 py-2 px-2 rounded-bl-xl border-b border-gray-600 text-gray-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
        >
            Hidden layer units
        </li>
        <input
            type="number"
            min="1"
            max="1024"
            step="1"
            pattern="\d+"
            bind:value={mode.hiddenLayerSize}
            class="col-span-1 p-1 text-gray-900 bg-gray-50 rounded-br-xl border border-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 sm:text-xs focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-900 dark:focus:bg-gray-900"
        />
    </ul>

    <hr
        class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
    />

    <PlayModeSettings {mode} />

    <CarDataDisplay {mode} />

    <EnvironmentSetter gameWorld={mode.gameWorld} />
{/key}
