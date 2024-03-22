<script>
	import { profileData } from '../stores';
	import InputFieldProfile from './InputFieldProfile.svelte';
</script>

<div>
	<InputFieldProfile
		label="First Name"
		placeholder="John Doe"
		bind:value={$profileData.firstName}
	/>
	<InputFieldProfile label="Last Name" placeholder="Smith" bind:value={$profileData.lastName} />

	<InputFieldProfile label="Email" placeholder="email@email.com" bind:value={$profileData.email} />
</div>

<style>
	div {
		border-radius: 12px;
		background: var(--Light-Grey, #fafafa);
		padding: 20px;
	}

	@media (min-width: 1440px) {
		div {
			margin-bottom: 80px;
		}
	}
</style>
