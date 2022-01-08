<script>
  import { onMount } from "svelte";
  import Welcome from "./Welcome.svelte";
  import Todos from "./Todos.svelte";
  import { name, todos, toEdit } from "./stores";

  function signOut() {
    name.set("");
    todos.set([]);
    toEdit.set({});
    localStorage.removeItem("name");
    localStorage.removeItem("todos");
  }

  onMount(() => {
    let username = localStorage.getItem("name");
    let savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (username && savedTodos) {
      name.set(username);
      todos.set(savedTodos);
    }
  });
</script>

<main>
  <h1>Whatcha Gotta Do?</h1>
  {#if !$name}
    <!-- If there is no name saved, display welcome form -->
    <Welcome />
  {:else}
    <!-- Otherwise, display app with existing information -->
    <button type="button" on:click={signOut}>SIGN OUT</button>
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
