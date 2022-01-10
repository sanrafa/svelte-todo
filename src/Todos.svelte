<script>
  import { dndzone } from "svelte-dnd-action";
  import { todos, toEdit } from "./stores";
  import SingleTodo from "./SingleTodo.svelte";
  import TodoForm from "./TodoForm.svelte";

  $: localStorage.setItem("todos", JSON.stringify($todos));

  function handleSort(event) {
    $todos = event.detail.items;
  }
</script>

<section>
  <TodoForm text={Object.keys($toEdit) ? $toEdit.text : ""} />
  <ul
    use:dndzone={{ items: $todos }}
    on:consider={handleSort}
    on:finalize={handleSort}
  >
    {#each $todos as todo (todo.id)}
      <SingleTodo {todo} />
    {/each}
  </ul>
</section>
