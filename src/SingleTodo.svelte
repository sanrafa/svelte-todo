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
    border: 2px solid hsl(214, 74%, 30%);
    box-shadow: 4px 3px 3px rgb(23, 80, 155);
    border-radius: 10px;
    padding: 0.15rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0.25rem;
    background-color: rgb(74, 153, 255);
    font-size: 1.2rem;
  }
  li > * {
    margin: 0.5rem;
  }
  .icon {
    width: 2em;
    height: 2em;
  }
  .delete {
    color: darkred;
  }
  .delete:hover {
    background-color: hsl(0, 100%, 20%);
  }
  .edit {
    color: blue;
  }
  .edit:hover {
    background-color: rgb(14, 105, 223);
  }
  .completed {
    opacity: 25%;
  }
</style>
