<script lang="ts">
	export let href = '';
	export let selected = false;
	export let className = '';
</script>

<div class={`${selected ? 'selected' : ''} ${className}`}>
	<slot name="icon" />
	<a {href}> <slot name="text" /> </a>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 11px 27px;
		border-radius: 8px;
		transition: all 0.3s ease;
		position: relative;
	}

	a {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 1;
		color: #737373;
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.selected {
		background-color: #efebff;
	}

	.selected a {
		color: #633cff;
	}

	:global(.selected svg) {
		fill: #633cff;
	}

	div:hover a {
		color: #633cff;
	}

	div:hover :global(svg) {
		fill: #633cff;
	}

	@media (min-width: 768px) {
		div {
			gap: 8px;
		}
		a {
			position: relative;
		}
	}
</style>
