import { SvelteKitAuth } from '@auth/sveltekit';
import credentials from '@auth/sveltekit/providers/credentials';
import axios from 'axios';

import { API_URL } from '$env/static/private';

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
					const result = await axios
						.post(`${API_URL}/auth/login`, {
							email: credentials.email,
							password: credentials.password
						})
						.then(({ data }) => {
							const { id, firstName, lastName, email, srcAvatar, accessToken } = data;
							return {
								id,
								name: !firstName || !lastName ? '' : `${firstName} ${lastName}`,
								email,
								image: srcAvatar,
								userData: {
									firstName,
									lastName,
									accessToken
								}
							};
						})
						.catch((error) => {
							console.log('error', error);
							throw new Error('Something went wrong!');
						});

					return result;
				}
			})
		],
		pages: {
			signIn: '/login',
			newUser: '/create-account'
		},
		session: {
			maxAge: 60 * 30
		},
		callbacks: {
			async jwt({ token, user }) {
				if (user) {
					token.userData = { ...user.userData };
				}

				return token;
			},
			async session({ token, session }) {
				const { accessToken, ...restUserData } = token.userData;
				session.user = {
					...session.user,
					...restUserData
				};
				session.accessToken = accessToken;
				return session;
			}
		}
	};
});
