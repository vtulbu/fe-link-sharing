// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import '@auth/sveltekit';
import '@auth/core/jwt';

type UserData = {
	firstName: string;
	lastName: string;
	accessToken: string;
};

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '@auth/sveltekit' {
	interface User {
		userData: UserData;
	}
	interface Account {}
	interface Session {
		accessToken: string;
		user: { firstName: string; lastName: string } & User;
	}
}

declare module '@auth/core/jwt' {
	interface JWT {
		userData: UserData;
	}
}

export {};
