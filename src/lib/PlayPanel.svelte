<script lang="ts">
    import type { PlayMode } from "./PlayMode";
    import EnvironmentSetter from "./EnvironmentSetter.svelte";
    import CarDataDisplay from "./CarDataDisplay.svelte";
    import PlayModeSettings from "./PlayModeSettings.svelte";

    export let mode: PlayMode;
</script>

<PlayModeSettings {mode} />

<CarDataDisplay {mode} />

<EnvironmentSetter gameWorld={mode.gameWorld} />

<hr
    class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"
/>

<button
    type="button"
    on:click={() => {
        mode.respawnCar();
    }}
    class="block grow mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >Reset car</button
>
