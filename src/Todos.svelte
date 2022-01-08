<script>
  import { todos, toEdit } from "./stores";
  import SingleTodo from "./SingleTodo.svelte";
  import TodoForm from "./TodoForm.svelte";

  $: localStorage.setItem("todos", JSON.stringify($todos));
</script>

<section>
  <TodoForm text={Object.keys($toEdit) ? $toEdit.text : ""} />
  <ul>
    {#each $todos as todo (todo.id)}
      <SingleTodo {todo} />
    {/each}
  </ul>
</section>
