<script lang="ts">
	import BottomSaveButton from '../../../components/BottomSaveButton.svelte';
	import Button from '../../../components/Button.svelte';
	import Description from '../../../components/Description.svelte';
	import EmptyLinksBoard from '../../../components/EmptyLinksBoard.svelte';
	import LinkInputs from '../../../components/LinkInputs.svelte';
	import { platforms } from '../../../constants';
	import { linksData } from '../../../stores';

	const addNewLink = () => {
		$linksData.length >= platforms.length
			? null
			: linksData.update((links) => [
					...links,
					{
						platform: platforms.filter((e) => {
							return links.some((link) => link.platform === e.value) ? false : true;
						})[0].value,
						link: ''
					}
				]);
	};
</script>

<div id="content-page">
	<Description
		heading="Customize your links"
		description="Add/edit/remove links below and then share all your profiles with the world!"
	/>
	<Button onClick={addNewLink} color="secondary">+ Add new link</Button>
	{#if $linksData.length === 0}
		<EmptyLinksBoard />
	{:else}
		<div class="flex flex-col gap-6">
			{#each $linksData as link, index}
				<LinkInputs {link} {index} />
			{/each}
		</div>
	{/if}
</div>
<BottomSaveButton />
