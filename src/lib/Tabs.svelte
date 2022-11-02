<script lang="ts">
    import DrawPanel from "./DrawPanel.svelte";
    import PlayPanel from "./PlayPanel.svelte";
    import TrainPanel from "./TrainPanel.svelte";
    import { DrawMode } from "./DrawMode";
    import { PlayMode } from "./PlayMode";
    import { TrainMode } from "./TrainMode";
    import { gameWorldStore } from "./stores";
    import type { Mode } from "./Mode";
    import type { GameWorld } from "./GameWorld";

    const defaultTab = 2;
    const titles = ["Draw", "Play", "Train", "Teach"];
    const panels = [DrawPanel, PlayPanel, TrainPanel];
    const modes: Mode[] = [];

    let activeTab = -1;
    let gameWorld: GameWorld;

    gameWorldStore.subscribe((gameWorldNew) => {
        if (gameWorldNew) {
            gameWorld = gameWorldNew;
            modes.push(new DrawMode(gameWorld));
            modes.push(new PlayMode(gameWorld));
            modes.push(new TrainMode(gameWorld));
            setActiveTab(defaultTab);
        }
    });

    function setActiveTab(num: number) {
        if (activeTab === num) return;
        if (activeTab !== -1) modes[activeTab].deactivate();
        activeTab = num;
        modes[activeTab].activate();
        gameWorld.requestCallbackBeforeRender(
            modes[activeTab].update.bind(modes[activeTab])
        );
    }
</script>

<div
    class="sticky top-0 z-50 inline-flex rounded-md shadow-sm w-full"
    role="group"
>
    {#each titles as title, i}
        <button
            on:click={() => setActiveTab(i)}
            type="button"
            class="transition-all grow py-2 px-4 text-md {i === 0
                ? 'rounded-bl-2xl'
                : ''} {i === titles.length - 1 ? 'rounded-br-2xl' : ''} {i ===
            activeTab
                ? 'font-bold text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
                : 'font-medium border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white text-gray-900 bg-white'} focus:z-10"
        >
            {title}
        </button>
    {/each}
</div>

<div class="p-4">
    <svelte:component this={panels[activeTab]} mode={modes[activeTab]} />
</div>
