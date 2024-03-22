<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	import { platforms } from '../constants';
	import type { Platform } from '../types';
	import { linksData } from '../stores';
	export let selected: Platform;
</script>

<Label class="mt-3 flex flex-col gap-2 text-xs text-colors-mine-shaft-default">
	Platform
	<Select
		class="mb-3 bg-white"
		items={platforms.filter(({ value }) => {
			if (selected === value) return true;

			return $linksData.every((link) => link.platform !== value);
		})}
		bind:value={selected}
		on:change={() => {
			linksData.update((links) => {
				const index = links.findIndex((link) => link.platform === selected);
				if (index === -1) return links;

				links[index].platform = selected;
				return links;
			});
		}}
	/>
</Label>

<style>
	:global(select:not([size])) {
		background-image: url('icons/icon-chevron-down.svg');
	}
</style>
