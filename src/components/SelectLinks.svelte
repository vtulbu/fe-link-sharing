<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	import { platforms } from '../constants';
	import type { Platform } from '../types';
	export let selected: Platform;
</script>

<Label class="mt-3 flex flex-col gap-2 text-xs text-colors-mine-shaft-default">
	Platform
	<Select class="mb-3 bg-white" items={platforms} bind:value={selected} />
</Label>

<style>
	:global(select:not([size])) {
		background-image: url('icons/icon-chevron-down.svg');
	}
</style>
