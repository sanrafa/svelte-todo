<script>
  import { name } from "./stores";
  let username;

  function handleSubmit() {
    name.set(username);
    /* 
    TODO: Change all sessionStorage to localStorage once application is more stable.
    */
    sessionStorage.setItem("name", username);
    sessionStorage.setItem("todos", null);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <p>First, what's your name?</p>
  <input type="text" bind:value={username} />
  <button type="submit">ENTER</button>
</form>
