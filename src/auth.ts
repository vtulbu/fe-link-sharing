import { SvelteKitAuth } from '@auth/sveltekit';
import credentials from '@auth/sveltekit/providers/credentials';

export const { handle, signIn, signOut } = SvelteKitAuth(async () => {
	return {
		providers: [
			credentials({
				id: 'credentials',
				name: 'Credentials',
				credentials: {
					email: { label: 'Email or Phone Number', type: 'text' },
					password: { label: 'Password *', type: 'password' }
				},

				async authorize(credentials) {
					return {
						id: '1',
						name: 'Test User',
						email: ''
					};
				}
			})
		],
		pages: {
			signIn: '/login',
			newUser: '/create-account'
		},
		session: {
			maxAge: 60 * 30
		}
	};
});
