<script>
	import BottomSaveButton from '../../../components/BottomSaveButton.svelte';
	import Button from '../../../components/Button.svelte';
	import EmptyLinksBoard from '../../../components/EmptyLinksBoard.svelte';
</script>

<div>
	<h1>Customize your links</h1>
	<p>Add/edit/remove links below and then share all your profiles with the world!</p>
	<Button onClick={() => console.log('Add new link clicked')} color="secondary">
		+ Add new link
	</Button>
	<EmptyLinksBoard />
	<BottomSaveButton />
</div>

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
