<script lang="ts">
	import Button from 'flowbite-svelte/Button.svelte';

	export let className: string = '';
	export let onClick: () => void;
	export let color: 'primary' | 'secondary' = 'primary';
</script>

<Button
	class={`mb-6 w-full text-base font-semibold hover:bg-colors-biloba-flower-default ${color === 'secondary' ? 'bg-transparent' : 'bg-colors-primary-default'}${className ? ` ${className}` : ''}`}
	on:click={onClick}
>
	<slot />
</Button>

<style>
</style>
