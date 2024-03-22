import type { links } from './constants';

export type Link = { platform: Platform; link: string };

export type Platform =
	| 'github'
	| 'codepen'
	| 'codewars'
	| 'devto'
	| 'facebook'
	| 'freecodecamp'
	| 'frontend-mentor'
	| 'gitlab'
	| 'hashnode'
	| 'linkedin'
	| 'stack-overflow'
	| 'twitch'
	| 'twitter'
	| 'youtube';

export type LinksKey = (typeof links)[number]['href'];
