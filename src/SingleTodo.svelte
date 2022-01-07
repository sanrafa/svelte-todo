<script>
  import { todos } from "./stores";
  export let id;
  export let task;
  export let completed = false;

  function handleDelete() {
    todos.update((todos) => todos.filter((todo) => todo.id != id));
  }
</script>

<li>
  <input type="checkbox" bind:checked={completed} />
  {task}
  <button type="button">EDIT</button>
  <button type="button" on:click={handleDelete}>DELETE</button>
</li>

<style>
  li {
    list-style-type: none;
  }
</style>
