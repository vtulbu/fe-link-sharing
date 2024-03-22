<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	export let href = '';
	export let platformName = '';
	export let className = '';
</script>

<a {href} target="_blank" transition:fade class={className}>
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
		height: var(--height, 45px);
		width: var(--width, 237px);
	}

	img {
		margin-left: auto;
	}
</style>
