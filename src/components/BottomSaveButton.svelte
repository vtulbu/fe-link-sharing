<script>
	import Button from './Button.svelte';
</script>

<div>
	<Button onClick={() => console.log('Save clicked')} className={'mb-0 md:w-fit'}>Save</Button>
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		margin-top: 24px;
		border-top: 1px solid var(--Borders, #d9d9d9);
		padding: 16px;
	}

	@media (min-width: 768px) {
		div {
			padding: 24px 40px;
		}
	}
</style>
