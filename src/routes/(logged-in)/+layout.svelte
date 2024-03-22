<script lang="ts">
	import LinkNav from '../../components/LinkNav.svelte';
	import { page } from '$app/stores';
	import { links } from '../../constants';
	import Button from '../../components/Button.svelte';
	import { isToastOpen } from '../../stores';
	import { fly } from 'svelte/transition';
	import type { LinksKey } from '../../types';
	import Icon from '../../components/Icon.svelte';
	import PhoneView from '../../components/PhoneView.svelte';

	export let data;

	const classNames: Record<LinksKey, string> = {
		[links[0].href]: '',
		[links[1].href]: '',
		[links[2].href]: 'ml-auto border border-colors-primary-default color-[red]'
	};

	const onClickShareLinkBtn = () => {
		navigator.clipboard.writeText(window.location.href);
		isToastOpen.set(true);

		const id = setTimeout(() => {
			isToastOpen.set(false);
		}, 2000);

		return () => clearTimeout(id);
	};
</script>

{#if $page.url.pathname === '/preview'}
	<header in:fly={{ x: 300, duration: 300, delay: 300 }} out:fly={{ x: 400, duration: 300 }}>
		<LinkNav href="/links" className={'w-[160px] h-[46px] border border-colors-primary-default'}>
			<span slot="text">Back to Editor</span>
		</LinkNav>
		<Button onClick={onClickShareLinkBtn} className={'mb-0 w-[160px]'}>Share Link</Button>
	</header>
{:else}
	<header in:fly={{ x: -300, duration: 300, delay: 300 }} out:fly={{ x: -300, duration: 300 }}>
		<img src="icons/logo-devlinks-small.svg" alt="logo" class="mr-auto md:hidden" />
		<img src="icons/logo-devlinks-large.svg" alt="logo" class="mr-auto hidden md:block" />
		{#each links as { href, name }}
			<LinkNav {href} selected={$page.url.pathname === href} className={classNames[href]}>
				<Icon name={href.slice(1) as "links" | "preview" | "profile"} slot="icon" />
				<span slot="text" class="hidden md:block">{name}</span>
			</LinkNav>
		{/each}
	</header>
{/if}

{#key data.url}
	<main in:fly={{ y: 300, duration: 400, delay: 400 }} out:fly={{ y: 300, duration: 400 }}>
	{#if $page.url.pathname !== '/preview'}
		<PhoneView />
	{/if}
		<div>
			<slot />
		</div>
	</main>
{/key}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		width: 100%;
		max-width: 1400px;
		background-color: #fff;
		border-radius: 12px;
		z-index: 10;
		margin: 0 auto;
	}

	:global(header div:last-of-type a) {
		color: #633cff;
	}

	:global(#content-page) {
		background-color: #fff;
		padding: 24px;
		border-radius: 12px 12px 0 0;
	}

	main {
		height: 100%;
	}

	@media (min-width: 768px) {
		header {
			padding: 16px 24px;
			margin-bottom: 24px;
		}

		:global(#content-page) {
			padding: 40px;
			max-width: 1400px;
			margin: auto;
		}
	}

	@media (min-width: 1440px) {
		:global(#content-page) {
			padding: 40px;
			width: 800px;
			margin: auto;
		}
		main {
			display: flex;
			gap: 24px;
			max-width: 1400px;
		}
	}
</style>
