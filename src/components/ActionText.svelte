<script lang="ts">
	export let href: string = '/';
	export let text: string = '';
	export let link: string = '';
</script>

<p
	class="flex flex-col items-center justify-center gap-1 text-colors-dove-gray-default md:flex-row"
>
	{text}
	<a {href} class="text-colors-primary-default">
		{link}
	</a>
</p>
