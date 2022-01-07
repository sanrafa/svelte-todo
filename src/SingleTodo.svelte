<script>
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
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
  <button type="button" class="icon edit"><MdEdit /></button>
  <button type="button" class="icon delete" on:click={handleDelete}
    ><MdDelete /></button
  >
</li>

<style>
  li {
    list-style-type: none;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
  .delete {
    color: darkred;
  }
  .edit {
    color: blue;
  }
</style>
