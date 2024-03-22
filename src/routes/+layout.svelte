<script>
	import '../app.pcss';
</script>

<div>
	<slot />
</div>

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #fafafa;
		min-width: 375px;
	}

	@media (min-width: 768px) {
		div {
			padding: 24px;
		}
	}
</style>
