<script lang="ts">
	import BottomSaveButton from '../../../components/BottomSaveButton.svelte';
	import Button from '../../../components/Button.svelte';
	import Description from '../../../components/Description.svelte';
	import EmptyLinksBoard from '../../../components/EmptyLinksBoard.svelte';
	import LinkInputs from '../../../components/LinkInputs.svelte';
	import { links } from '../../../stores';

	const addNewLink = () => {
		links.update((links) => [...links, { platform: 'github', link: '' }]);
	};
</script>

<div id="content-page">
	<Description
		heading="Customize your links"
		description="Add/edit/remove links below and then share all your profiles with the world!"
	/>
	<Button onClick={addNewLink} color="secondary">+ Add new link</Button>
	{#if $links.length === 0}
		<EmptyLinksBoard />
	{:else}
		<div class="flex flex-col gap-6">
			{#each $links as link, index}
				<LinkInputs {link} {index} />
			{/each}
		</div>
	{/if}
</div>
<BottomSaveButton />
