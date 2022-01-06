<script>
  import { todos } from "./stores";

  let todo = {};
  let text;

  function handleSubmit() {
    if (text) {
      let list = $todos,
        todosAdded;
      let id = list.length + 1;
      todo.id = id;
      todo.text = text;
      todos.set([...list, todo]);
      todosAdded = $todos;
      sessionStorage.setItem("todos", JSON.stringify(todosAdded));
      todo = {};
      text = "";
    } // add ELSE statement that triggers feedback if input empty?
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="TODO here" bind:value={text} />
  <button type="submit">ADD</button>
</form>
