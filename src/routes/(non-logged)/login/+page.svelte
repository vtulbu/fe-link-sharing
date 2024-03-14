<script lang="ts">
	import ActionText from '../../../components/ActionText.svelte';
	import Button from '../../../components/Button.svelte';
	import InputField from '../../../components/InputField.svelte';
	import NonLoggedText from '../../../components/NonLoggedText.svelte';
</script>

<NonLoggedText heading="Login" subheading="Add your details below to get back into the app" />

<InputField label="Email address" type="email" placeholder="e.g. alex@email.com">
	<img slot="icon" src="/icons/email.svg" alt="email icon" />
</InputField>
<InputField label="Password" type="password" placeholder="Enter your password">
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<Button onClick={() => console.log('Login clicked')}>Login</Button>

<ActionText href="/create-account" text="Don’t have an account?" link="Create one" />
