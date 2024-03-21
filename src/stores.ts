import { writable } from 'svelte/store';
import type { Link } from './types';

export const links = writable<Link[]>([]);
