<script>
	import Header from './Header.svelte';
	import Controls from './Controls.svelte';
	import Bracket from './Bracket.svelte';
	import { names } from './stores.js';
	function handleShuffle() {
		names.shuffle();
	}
	
	$: bracket = $names.map(name => ({
		name,
		id: Math.random()
	}));
</script>

<style>
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	:global(body > * + *) {
		margin-top: 1rem;
	}
	
	.bracket {
		max-width: 800px;
		width: 100%;
		display: flex;
	}
</style>

<Header title="Sportiv"/>

<Controls on:shuffle={handleShuffle}/>

<!-- to display the names side by side, wrap the bracket component in a container styled as a flex row -->
<main class="bracket">
	<Bracket {bracket} />
</main>

