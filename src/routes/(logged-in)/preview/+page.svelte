<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import LinkElement from '../../../components/LinkElement.svelte';
	import CopyLinkToast from '../../../components/CopyLinkToast.svelte';
	import { linksData, profileData } from '../../../stores';
	import { platformColors, platforms } from '../../../constants';
	import Icon from '../../../components/Icon.svelte';
</script>

<div class="content">
	<Avatar
		src={$profileData.avatar}
		border
		class="mb-6 h-28 w-28 ring-4 ring-colors-primary-default"
	/>
	<p class="text-[32px] font-bold">
		{$profileData.firstName}
		{$profileData.lastName}
	</p>

	<p class="mb-14 mt-2 text-[16px] font-normal leading-[150%] text-colors-dove-gray-default">
		{$profileData.email}
	</p>
	{#each $linksData.slice(0, 5) as link}
		<LinkElement
			className="mb-5"
			--height="56px"
			--width="240px"
			href={link.link}
			--link-color={platformColors[link.platform] || '#000'}
			platformName={platforms.find((platform) => platform.value === link.platform)?.name ||
				'Unknown'}
		>
			<Icon slot="icon" bind:name={link.platform} fill={'#fff'} />
		</LinkElement>
	{/each}

	<CopyLinkToast />
</div>

<style>
	.content {
		height: 100%;
		padding: 48px 56px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}

	@media (min-width: 768px) {
		.content {
			height: fit-content;
			min-height: 540px;
			max-width: 350px;
			border-radius: 24px;
			margin: 130px auto 0;
			box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
			position: relative;
			z-index: 1;
		}

		/* #container-page::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 360px;
			background-color: #633cff;
			border-radius: 0 0 32px 32px;
			box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
			transition: none !important;
		} */
	}
</style>
