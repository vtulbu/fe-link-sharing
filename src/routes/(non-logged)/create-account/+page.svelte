<script lang="ts">
	import Button from '../../../components/Button.svelte';
	import NonLoggedText from '../../../components/NonLoggedText.svelte';
	import InputField from '../../../components/InputField.svelte';
	import ActionText from '../../../components/ActionText.svelte';
</script>

<NonLoggedText heading="Create account" subheading="Let’s get you started sharing your links!" />
<InputField label="Email address" type="email" placeholder="e.g. alex@email.com">
	<img slot="icon" src="/icons/email.svg" alt="email icon" />
</InputField>
<InputField label="Password" type="password" placeholder="At least 8 characters">
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<InputField label="Password" type="password" placeholder="At least 8 characters">
	<img slot="icon" src="/icons/password.svg" alt="password icon" />
</InputField>

<Button onClick={() => console.log('Login clicked')}>Create new account</Button>

<ActionText href="/login" text="Already have an account?" link="Login" />
