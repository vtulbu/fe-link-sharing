import { redirect } from '@sveltejs/kit';

const protectedRoutes = ['/preview', '/links', '/profile'];
const publicRoutes = ['/login', '/create-account'];

export const load = async (event) => {
	const session = await event.locals.auth();

	const { pathname } = event.url;

	if (pathname === '/') {
		return redirect(303, '/login');
	}

	if (protectedRoutes.includes(pathname) && !session?.user) {
		return redirect(303, '/login');
	}

	if (publicRoutes.includes(pathname) && session?.user) {
		return redirect(303, '/links');
	}

	return {
		session
	};
};
