<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.pcss';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<div>
		<slot />
	</div>
</QueryClientProvider>

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fafafa;
		min-width: 375px;
	}

	@media (min-width: 768px) {
		div {
			padding: 24px;
		}
	}
</style>
