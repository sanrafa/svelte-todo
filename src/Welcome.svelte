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

<style>
  p {
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    text-shadow: 1px 1px 1px rgba(128, 128, 128, 0.603);
  }
  button {
    font-weight: bold;
    background-color: rgb(23, 80, 155);
    color: white;
    border: 1px solid rgb(27, 92, 177);
  }
  button:hover {
    background-color: rgba(38, 125, 240, 0.89);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.342);
  }
  form {
    text-align: center;
  }
</style>
