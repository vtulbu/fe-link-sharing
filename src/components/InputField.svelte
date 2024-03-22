<script lang="ts">
	import Label from 'flowbite-svelte/Label.svelte';
	import Input from 'flowbite-svelte/Input.svelte';
	import type { InputProps } from 'flowbite-svelte/Input.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	export let value = '';
	export let label: string = '';
	export let type: InputProps['type'] = 'text';
	export let placeholder: string = '';
	export let id: string = '';

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('input', value);
	});

	const handleChange: (e: Event) => void = (event) => {
		const { value: val } = event.target as HTMLInputElement;
		value = val;
		dispatch('input', value);
	};
</script>

<Label class="mb-2 block text-xs text-colors-mine-shaft-default">
	{label}
</Label>
<Input
	class="mb-6 bg-white placeholder-colors-mine-shaft-default placeholder-opacity-50"
	{id}
	{type}
	{placeholder}
	on:input={handleChange}
	bind:value
>
	<slot slot="left" name="icon" />
</Input>
