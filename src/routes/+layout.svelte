<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Raleway:wght" rel="stylesheet" />
</svelte:head>

<div class="app">
	<Header />
	<main><slot /></main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		width: 100%;
		max-width: 60rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 720px) {
		main {
			padding: 1rem 3rem;
		}
	}
</style>
