<script>
	import '../app.pcss';
</script>

<main>
	<slot />
</main>

<style>
	main {
		height: 100vh;
		min-width: 375px;
		background-color: #fafafa;
	}

	@media (min-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
		}
	}
</style>
