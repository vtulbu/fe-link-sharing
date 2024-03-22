<script>
	import { Toast } from 'flowbite-svelte';
	import { slide, fade } from 'svelte/transition';
	import { isToastOpen } from '../stores';
</script>

<Toast
	transition={slide}
	bind:open={$isToastOpen}
	class="absolute bottom-10 left-0 right-0 m-auto min-w-[300px] max-w-[400px] bg-colors-mine-shaft-default px-4 py-6 text-white"
>
	<img src="icons/link.svg" alt="drag and drop icon" slot="icon" />

	The link has been copied to your clipboard!
</Toast>
