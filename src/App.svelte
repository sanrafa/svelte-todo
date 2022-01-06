<script>
  import Welcome from "./Welcome.svelte";
  import Todos from "./Todos.svelte";
  import { name } from "./stores";
</script>

<main>
  <h1>Whatcha Gotta Do?</h1>
  {#if !$name}
    <!-- If there is no name saved, display welcome form -->
    <Welcome />
  {:else}
    <!-- Otherwise, display app with existing information -->
    <h2>Hello {$name}!</h2>
    <p>What do you need to do?</p>
    <Todos />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
