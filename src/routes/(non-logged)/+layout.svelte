<main class="bg-white">
	<img src="icons/logo-devlinks-large.svg" alt="devlinks logo" />
	<slot />
</main>

<style>
	img {
		margin-bottom: 64px;
		width: 180px;
	}

	main {
		padding: 40px;
		height: 100%;
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
			height: fit-content;
			margin: auto;
		}
	}
</style>
