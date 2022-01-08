<script>
  import { name } from "./stores";
  let username;

  function handleSubmit() {
    name.set(username);
    localStorage.setItem("name", $name);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <p>First, what's your name?</p>
  <input type="text" bind:value={username} />
  <button type="submit">ENTER</button>
</form>
