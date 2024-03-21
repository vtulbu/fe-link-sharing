<script>
	import UploadImage from './UploadImage.svelte';
</script>

<div>
	<p>Profile picture</p>
	<UploadImage />
	<p>Image must be below 1024x1024px. Use PNG or JPG format.</p>
</div>

<style>
	div {
		border-radius: 12px;
		background: var(--Light-Grey, #fafafa);
		display: flex;
		padding: 20px;
		flex-direction: column;
		align-self: stretch;
		margin-bottom: 24px;
	}

	p {
		color: var(--Grey, #737373);
		font-size: 16px;
		font-weight: 400;
		line-height: 150%; /* 24px */
	}

	p:nth-of-type(2) {
		font-size: 12px;
		line-height: 150%; /* 18px */
	}

	@media (min-width: 768px) {
		div {
			flex-direction: row;
			gap: 24px;
			align-items: center;
		}

		p {
			width: 130px;
		}

		p:first-of-type {
			flex: 1;
		}
	}
</style>
