<script lang="ts">
	import { icons } from '../constants';

	export let name: keyof typeof icons;
	export let width = '1rem';
	export let height = '1rem';
	export let fill: string | undefined;

	$: displayIcon = icons[name];
</script>

{#if displayIcon}
	<svg
		class={$$props.class}
		{width}
		{height}
		fill={fill ? fill : displayIcon.fill}
		viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
	>
{:else}
	{null}
{/if}
