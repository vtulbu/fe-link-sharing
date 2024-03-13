<div class="bg-white">
	<header>
		<img src="icons/logo-devlinks-large.svg" alt="devlinks logo" />
	</header>
	<slot />
</div>

<style>
	div {
		padding: 32px;
		max-width: 475px;
		margin: auto;
	}

	header {
		margin-bottom: 64px;
	}

	@media (min-width: 768px) {
		header {
			position: absolute;
			margin-bottom: unset;
			top: -70px;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		div {
			position: relative;
			padding: 40px;
		}
	}
</style>
