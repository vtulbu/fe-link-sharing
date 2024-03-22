<script lang="ts">
	export let href = '';
	export let platformName = '';
</script>

<a {href} target="_blank">
	<slot name="icon" />
	{platformName}
	<img src="icons/icon-arrow-right.svg" alt="link icon" />
</a>

<style>
	a {
		display: flex;
		padding: 16px;
		align-items: center;
		gap: 8px;
		border-radius: 8px;
		background-color: var(--link-color, #000);
		color: white;
		min-width: 240px;
		margin-bottom: 20px;
	}

	img {
		margin-left: auto;
	}
</style>
