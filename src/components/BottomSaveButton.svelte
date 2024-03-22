<script>
	import Button from './Button.svelte';
	export let disabled = false;
</script>

<div>
	<Button 
		onClick={() => console.log('Save clicked')} className={'mb-0 md:w-fit'}
		{disabled}
	>
		Save
	</Button>
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid var(--Borders, #d9d9d9);
		padding: 16px;
		background-color: #fff;
		border-radius: 0 0 12px 12px;
	}

	@media (min-width: 768px) {
		div {
			padding: 24px 40px;
			max-width: 1400px;
			margin: auto;
		}
	}
</style>
