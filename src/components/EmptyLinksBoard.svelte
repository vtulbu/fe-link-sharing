<script>
	import { slide } from 'svelte/transition';
</script>

<div transition:slide>
	<img src="icons/illustration-empty.svg" alt="Empty Links Board" class="w-[125px] md:w-[250px]" />
	<h2>Let’s get you started</h2>
	<p>
		Use the “Add new link” button to get started. Once you have more than one link, you can reorder
		and edit them. We’re here to help you share your profiles with everyone!
	</p>
</div>

<style>
	div {
		border-radius: 12px;
		background: var(--Light-Grey, #fafafa);
		padding: 46px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		color: var(--Dark-Grey, #333);
		text-align: center;
		font-size: 24px;
		font-weight: 700;
		line-height: 150%; /* 36px */
		margin: 24px 0;
	}

	p {
		color: var(--Grey, #737373);
		text-align: center;
		font-size: 16px;
		font-weight: 400;
		line-height: 150%; /* 24px */
	}

	@media (min-width: 768px) {
		div {
			padding: 80px;
		}

		h2 {
			font-size: 32px;
			line-height: 150%; /* 48px */
		}
	}
</style>
