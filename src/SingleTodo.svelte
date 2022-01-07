<script>
  export let task;
  export let completed = false;
</script>

<li>
  <input type="checkbox" bind:checked={completed} />
  {task}
  <button type="button">EDIT</button>
  <button type="button">DELETE</button>
</li>

<style>
  li {
    list-style-type: none;
  }
</style>
