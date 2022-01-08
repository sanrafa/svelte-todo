<script>
  import { createEventDispatcher } from "svelte";

  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  import { todos, toEdit } from "./stores";
  export let todo;
  let completed = todo.done;
  let id = todo.id;

  function handleEdit() {
    toEdit.set(todo);
    console.log($toEdit);
  }

  function handleDelete() {
    todos.update((todos) => todos.filter((todo) => todo.id != id));
  }
</script>

<li>
  <input type="checkbox" bind:checked={completed} />
  {todo.text}
  <button type="button" class="icon edit" on:click={handleEdit}
    ><MdEdit /></button
  >
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
