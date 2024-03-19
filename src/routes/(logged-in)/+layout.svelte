<script lang="ts">
	import LinkNav from '../../components/LinkNav.svelte';
	import { page } from '$app/stores';
	import { links } from '../../constants';

	type LinksKey = (typeof links)[number]['href'];

	const classNames: Record<LinksKey, string> = {
		[links[0].href]: '',
		[links[1].href]: '',
		[links[2].href]: 'ml-auto border border-colors-primary-default color-[red]'
	};
</script>

<header>
	<img src="icons/logo-devlinks-small.svg" alt="logo" class="mr-auto md:hidden" />
	<img src="icons/logo-devlinks-large.svg" alt="logo" class="mr-auto hidden md:block" />
	{#each links as { href, icon, name }}
		<LinkNav {href} selected={$page.url.pathname === href} className={classNames[href]}>
			<img
				src={`icons/${icon}`}
				alt={name}
				class={href === '/preview' ? 'md:hidden' : ''}
				slot="icon"
			/>
			<span slot="text" class="hidden md:block">{name}</span>
		</LinkNav>
	{/each}
</header>
<slot />

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		width: 100%;
		max-width: 1400px;
	}

	:global(header div:last-of-type a) {
		color: #633cff;
	}

	@media (min-width: 768px) {
		header {
			padding: 16px 24px;
			margin: 24px;
		}
	}
</style>