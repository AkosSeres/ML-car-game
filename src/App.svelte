<script lang="ts">
  import ThreeCanvas from "./lib/ThreeCanvas.svelte";
  import Tabs from "./lib/Tabs.svelte";
</script>

<main>
  <div id="canvas-pane">
    <ThreeCanvas />
  </div>
  <div id="menu-pane">
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
