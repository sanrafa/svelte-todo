<script>
  import { get } from "svelte/store";
  import { todos, toEdit } from "./stores";

  $: addTodo = $toEdit.id ? false : true;
  export let text;

  let todo = {};

  function handleEdit() {
    if (text) {
      let todoList = get(todos);
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
      let list = $todos;
      let id = list.length + 1;
      todo.id = id;
      todo.text = text;
      todo.done = false;
      todos.update((todos) => (todos = [...list, todo]));
      todo = {};
      text = "";
    } // add ELSE statement that triggers feedback if input empty?
  }
</script>

<form on:submit|preventDefault={addTodo ? handleSubmit : handleEdit}>
  <input type="text" placeholder="TODO here" bind:value={text} />
  <button type="submit">{addTodo ? "ADD" : "EDIT"}</button>
</form>
