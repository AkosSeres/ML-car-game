<script lang="ts">
    import type { DrawMode } from "./DrawMode";

    export let mode: DrawMode;
</script>

<label for="steps-range" class="block mb-1 text-sm font-medium text-gray-300"
    >Road width: <b>{mode.brushSize}</b></label
>
<input
    id="steps-range"
    type="range"
    min="0.8"
    max="2"
    bind:value={mode.brushSize}
    step="0.1"
    class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
/>
