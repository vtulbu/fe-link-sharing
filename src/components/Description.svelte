<script>
	export let heading = '';
	export let description = '';
</script>

<h1>
	{heading}
</h1>
<p>
	{description}
</p>

<style>
	h1 {
		color: var(--Dark-Grey, #333);
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 150%;
		margin-bottom: 8px;
	}

	p {
		color: var(--Grey, #737373);
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 32px;
			line-height: 150%; /* 48px */
		}
	}
</style>
