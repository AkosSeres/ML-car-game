<script lang="ts">
    import type { GameWorld } from "./GameWorld";

    export let gameWorld: GameWorld;
</script>

{#if gameWorld !== null}
    <label
        for="steps-range"
        class="block mb-1 text-sm font-medium text-gray-300"
        >Ground friction: <b>{gameWorld.ground.body.material.friction}</b
        ></label
    >
    <input
        id="steps-range"
        type="range"
        min="0.05"
        max="1"
        bind:value={gameWorld.ground.body.material.friction}
        step="0.02"
        class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
    />

    <label
        for="steps-range"
        class="block my-1 text-sm font-medium text-gray-300"
        >Barrier friction: <b
            >{gameWorld.raceTrack.barrrierFriction}</b
        ></label
    >
    <input
        id="steps-range"
        type="range"
        min="0.0"
        max="1"
        bind:value={gameWorld.raceTrack.barrrierFriction}
        step="0.02"
        class="w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg appearance-none cursor-pointer range-lg"
    />
{/if}
