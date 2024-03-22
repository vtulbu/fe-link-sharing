<script lang="ts">
	import Label from 'flowbite-svelte/Label.svelte';
	import Input from 'flowbite-svelte/Input.svelte';
	import type { InputProps } from 'flowbite-svelte/Input.svelte';

	export let value = '';
	export let label: string = '';
	export let type: InputProps['type'] = 'text';
	export let placeholder: string = '';
	export let id: string = '';
</script>

<div>
	<Label class="mb-2 block text-base text-colors-dove-gray-default md:w-1/2">
		{label}
	</Label>
	<Input
		class="mb-3 bg-white placeholder-colors-mine-shaft-default placeholder-opacity-50"
		{id}
		{type}
		{placeholder}
		bind:value
	/>
</div>

<style>
	@media (min-width: 768px) {
		div {
			display: flex;
			align-items: center;
		}
	}
</style>
