<script lang="ts">
	import Button from '../../../components/Button.svelte';
	import InputField from '../../../components/InputField.svelte';
</script>

<h1 class="leading-36 mb-2 text-2xl font-bold text-colors-mine-shaft-default md:text-[32px]">
	Login
</h1>
<p
	class="leading-24
	mb-10
	text-base
	text-colors-dove-gray-default"
>
	Add your details below to get back into the app
</p>

<InputField label="Email address" type="email" placeholder="e.g. alex@email.com">
	<img slot="icon" src="/icons/email.svg" alt="email icon" />
</InputField>
<InputField label="Password" type="password" placeholder="Enter your password">
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<Button onClick={() => console.log('Login clicked')}>Login</Button>

<p
	class="flex flex-col items-center justify-center gap-1 text-colors-dove-gray-default md:flex-row"
>
	Don’t have an account? <a href="/create-account" class="text-colors-primary-default">Create one</a
	>
</p>
