import { IconLinksHeader, ProfileDetailsHeader, PreviewHeader } from '../components/icons';

export default [
	{
		name: 'Links',
		icon: IconLinksHeader,
		href: '/links'
	},
	{
		name: 'Profile Details',
		icon: ProfileDetailsHeader,
		href: '/profile'
	},
	{
		name: 'Preview',
		icon: PreviewHeader,
		href: '/preview'
	}
] as const;
