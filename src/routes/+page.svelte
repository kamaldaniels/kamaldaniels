<script>
	import appDev from '$lib/images/gummy-macbook.svg';
</script>

<svelte:head>
	<title>Kamal Daniels</title>
	<meta name="description" content="Kamal Daniels - Personal website" />
</svelte:head>

<section>
	<h1>Kamal Daniels</h1>
	<img src={appDev} alt="Programming" />
	<p>My name's Kamal, welcome to my website 👋</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.5;
		gap: 2rem;
	}

	img {
		width: 26rem;
		max-width: 100%;
	}
</style>
