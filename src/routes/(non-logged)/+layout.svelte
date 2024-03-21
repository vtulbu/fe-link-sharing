<div class="bg-colors-alabaster-default">
	<main class="bg-white">
		<img src="icons/logo-devlinks-large.svg" alt="devlinks logo" />
		<slot />
	</main>
</div>

<style>
	img {
		margin-bottom: 64px;
		width: 180px;
	}

	main {
		padding: 40px;
	}

	@media (min-width: 768px) {
		img {
			position: absolute;
			top: -70px;
			left: 0;
			right: 0;
			margin: 0 auto;
		}

		main {
			position: relative;
			width: 475px;
			border-radius: 12px;
		}

		div {
			height: 100vh;

			padding: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
