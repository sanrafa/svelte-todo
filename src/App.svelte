<script>
	import Welcome from "./Welcome.svelte";
	import Todos from "./Todos.svelte";
	import {name} from './stores';
</script>

<main>
	<h1>Whatcha Gotta Do?</h1>
	{#if $name}
	<h2>Hello {$name}!</h2>
	<p>What do you need to do?</p>
	<Todos />
	{/if}
	<Welcome />
	
</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
</style>