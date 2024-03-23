<script lang="ts">
	import Button from '../../../components/Button.svelte';
	import NonLoggedText from '../../../components/NonLoggedText.svelte';
	import InputField from '../../../components/InputField.svelte';
	import ActionText from '../../../components/ActionText.svelte';
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import { useMutation } from '@sveltestack/svelte-query';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { Alert } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	let email = '';
	let password = '';
	let isAlertOpen = false;

	const mutation = useMutation(
		(data: { email: string; password: string }) =>
			axios.post(`${PUBLIC_API_URL}/auth/create-account`, data),
		{
			onSuccess: () => {
				isAlertOpen = true;
				const id = setTimeout(() => {
					isAlertOpen = false;
					goto('/login');
				}, 2000);
			},
			onError: (error) => {
				console.error('Error creating account', error);
			}
		}
	);
</script>

<NonLoggedText heading="Create account" subheading="Let’s get you started sharing your links!" />
<InputField label="Email address" type="email" placeholder="e.g. alex@email.com" bind:value={email}>
	<img slot="icon" src="/icons/email.svg" alt="email icon" />
</InputField>
<InputField
	label="Password"
	type="password"
	placeholder="At least 8 characters"
	bind:value={password}
>
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<InputField label="Password" type="password" placeholder="At least 8 characters">
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<Button
	onClick={() =>
		$mutation.mutate({
			email,
			password
		})}
>
	{$mutation.isLoading ? 'Creating account...' : 'Create new account'}
</Button>

<ActionText href="/login" text="Already have an account?" link="Login" />

{#if isAlertOpen}
	<Alert color="yellow" transition={fade}>
		<p>Account created successfully!</p>
	</Alert>
{/if}
