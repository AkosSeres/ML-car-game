<script lang="ts">
  import ThreeCanvas from "./lib/ThreeCanvas.svelte";
  import Tabs from "./lib/Tabs.svelte";
</script>

<main>
  <div id="canvas-pane">
    <div
      id="debug-element"
      class="fixed top-0 left-0 p-2 pointer-events-none font-mono"
    />
    <ThreeCanvas />
  </div>
  <div id="menu-pane" class="overflow-x-hidden overflow-y-auto p-0 m-0">
    <Tabs />
  </div>
</main>

<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  #canvas-pane {
    flex-grow: 1;
    height: 100%;
  }

  #menu-pane {
    width: 25vw;
    min-width: 300px;
    height: 100%;
  }
</style>
