<script>
  import { todos } from "./stores";

  let todo = {};
  let text;

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

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="TODO here" bind:value={text} />
  <button type="submit">ADD</button>
</form>
