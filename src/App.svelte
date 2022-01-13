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
    <h2>Hello <span>{$name}</span>!</h2>
    <p>What do you need to do?</p>
    <Todos />
  {/if}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap");
  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  button {
    font-weight: bold;
    background-color: rgb(14, 105, 223);
    box-shadow: 0px 2px 0.5px white;
  }
  button:hover {
    color: white;
    box-shadow: 0px 3px 1px white;
  }
  h1 {
    font-family: "Mochiy Pop P One", sans-serif;
    padding: 0;
    color: rgb(252, 252, 252);
    text-shadow: 3px 3px 2px hsl(214, 88%, 30%);
  }
  h2 {
    font-family: "Mochiy Pop P One", sans-serif;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
  }
  span {
    color: rgb(74, 153, 255);
    text-shadow: 1px 1px 0px hsl(214, 88%, 30%);
  }
  p {
    font-weight: bold;
    color: white;
  }
</style>
