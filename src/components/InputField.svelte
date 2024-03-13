<script lang="ts">
	import Label from 'flowbite-svelte/Label.svelte';
	import Input from 'flowbite-svelte/Input.svelte';
	import type { InputProps } from 'flowbite-svelte/Input.svelte';

	export let label: string = '';
	export let type: InputProps['type'] = 'text';
	export let placeholder: string = '';
	export let id: string = '';
</script>

<Label class="mb-2 block text-xs text-colors-mine-shaft-default">
	{label}
</Label>
<Input class="mb-6" {id} {type} {placeholder}>
	<slot slot="left" name="icon" />
</Input>

<style>
	input {
		border: solid 1px red !important;
	}
</style>
