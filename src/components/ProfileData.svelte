<script>
	import InputField from './InputField.svelte';
	import InputFieldProfile from './InputFieldProfile.svelte';
</script>

<div>
	<InputFieldProfile label="First Name" placeholder="John Doe" />
	<InputFieldProfile label="Last Name" placeholder="Smith" />
	<InputFieldProfile label="Email" placeholder="email@email.com" />
</div>

<style>
	div {
		border-radius: 12px;
		background: var(--Light-Grey, #fafafa);
		padding: 20px;
	}
</style>
