<script>
  import MdDelete from "svelte-icons/md/MdDelete.svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  import { todos, toEdit } from "./stores";
  export let todo;
  let id = todo.id;

  function updateStatus() {
    todos.update((todos) =>
      todos.map((item) => (item.id == todo.id ? todo : item))
    );
  }

  function handleEdit() {
    toEdit.set(todo);
  }

  function handleDelete() {
    todos.update((todos) => todos.filter((todo) => todo.id != id));
  }
</script>

<li class:completed={todo.done ? true : false}>
  <input type="checkbox" bind:checked={todo.done} on:change={updateStatus} />
  {todo.text}
  <div>
    <button type="button" class="icon edit" on:click={handleEdit}
      ><MdEdit /></button
    >
    <button type="button" class="icon delete" on:click={handleDelete}
      ><MdDelete /></button
    >
  </div>
</li>

<style>
  li {
    list-style-type: none;
    border: 2px solid rgba(128, 128, 128, 0.37);
    box-shadow: 4px 3px 3px rgba(128, 128, 128, 0.397);
    border-radius: 10px;
    padding: 0.15rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0.25rem;
  }
  li > * {
    margin: 0.5rem;
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
  .completed {
    opacity: 25%;
  }
</style>
