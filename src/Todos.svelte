<script>
  import { todos } from "./stores";
  import SingleTodo from "./SingleTodo.svelte";
  import TodoForm from "./TodoForm.svelte";
</script>

<section>
  <TodoForm />
  <ul>
    {#each $todos as todo (todo.id)}
      <SingleTodo task={todo.text} completed={todo.done} id={todo.id} />
    {/each}
  </ul>
</section>
