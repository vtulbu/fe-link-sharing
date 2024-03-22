<script lang="ts">
	import { slide } from 'svelte/transition';
	import { links } from '../stores';
	import type { Link } from '../types';
	import InputField from './InputField.svelte';
	import SelectLinks from './SelectLinks.svelte';

	export let link: Link;
	export let index: number;

	let onRemoveClick = (index: number) => {
		links.update((links) => links.filter((_, i) => i !== index));
	};
</script>

<div transition:slide>
	<img src="icons/icon-drag-and-drop.svg" alt="drag and drop icon" />
	<p>
		Link #{index + 1}
	</p>
	<button on:click={() => onRemoveClick(index)}>Remove</button>
	<SelectLinks bind:selected={link.platform} />
	<InputField placeholder={`e.g. https://www.${link.platform}.com/your-username`} label="Link">
		<img slot="icon" src="/icons/link.svg" alt="link icon" />
	</InputField>
</div>

<style>
	div {
		padding: 20px;
		background-color: #fafafa;
		border-radius: 12px;
	}

	img {
		display: inline;
		margin: 0 6px 4px 0;
	}

	img:hover {
		cursor: grab;
	}

	p {
		color: var(--Grey, #737373);
		font-family: 'Instrument Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 150%; /* 24px */
		display: inline-block;
		margin-right: calc(100% - 150px);
	}

	button {
		color: var(--Grey, #737373);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%; /* 24px */
	}
</style>
