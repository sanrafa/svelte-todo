<script>
  import MdAdd from "svelte-icons/md/MdAdd.svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  import { uid } from "uid/single";
  import { get } from "svelte/store";
  import { todos, toEdit } from "./stores";

  $: addTodo = $toEdit.id ? false : true;
  export let text;

  let todo = {};

  function handleEdit() {
    if (text) {
      let todoToEdit = get(toEdit);
      todoToEdit.text = text;
      todos.update(
        (todos) =>
          (todos = todos.map((todo) =>
            todo.id == todoToEdit.id ? todoToEdit : todo
          ))
      );
      toEdit.set({});
    }
  }

  function handleSubmit() {
    if (text) {
      let list = get(todos);
      let id = uid(3);
      todo = {
        id: id,
        text: text,
        done: false,
      };
      todos.update((todos) => (todos = [todo, ...list]));
      todo = {};
      text = "";
    } // add ELSE statement that triggers feedback if input empty?
  }
</script>

<form on:submit|preventDefault={addTodo ? handleSubmit : handleEdit}>
  <input type="text" placeholder="TODO here" bind:value={text} />
  {#if addTodo}
    <button type="submit" class="icon"><MdAdd /></button>
  {:else}
    <button type="submit" class="icon"><MdEdit /></button>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  input {
    margin-right: 0.6rem;
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  button:hover {
    opacity: 50%;
  }
</style>
