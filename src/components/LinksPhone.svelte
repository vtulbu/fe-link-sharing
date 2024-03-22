<script>
	import { platformColors, platforms } from '../constants';

	import { linksData } from '../stores';
	import Icon from './Icon.svelte';
	import LinkElement from './LinkElement.svelte';
</script>

<div>
	{#each $linksData.slice(0, 5) as link}
		<LinkElement
			href={link.link}
			--link-color={platformColors[link.platform] || '#000'}
			platformName={platforms.find((platform) => platform.value === link.platform)?.name ||
				'Unknown'}
		>
			<Icon slot="icon" bind:name={link.platform} fill={'#fff'} />
		</LinkElement>
	{/each}
</div>

<style>
	div {
		position: absolute;
		width: 310px;
		height: 630px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 19px;
		padding-top: 275px;
	}
</style>
