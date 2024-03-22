import { writable } from 'svelte/store';
import type { Link, Profile } from './types';

export const linksData = writable<Link[]>([]);
export const isToastOpen = writable<boolean>(false);

export const profileData = writable<Profile>({
	lastName: '',
	firstName: '',
	email: '',
	avatar: ''
});
