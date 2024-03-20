<script>
	import BottomSaveButton from '../../../components/BottomSaveButton.svelte';
	import Button from '../../../components/Button.svelte';
	import Description from '../../../components/Description.svelte';
	import EmptyLinksBoard from '../../../components/EmptyLinksBoard.svelte';
</script>

<div>
	<Description
		heading="Customize your links"
		description="Add/edit/remove links below and then share all your profiles with the world!"
	/>
	<Button onClick={() => console.log('Add new link clicked')} color="secondary">
		+ Add new link
	</Button>
	<EmptyLinksBoard />
	<BottomSaveButton />
</div>
