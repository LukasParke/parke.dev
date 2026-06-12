export const profile = {
	name: 'Luke Parke',
	host: 'luke@parke',
	tagline: 'Specs, SDKs, and servers.',
	location: 'Austin, TX',
	bio: 'Software engineer focused on Identity and Developer Experience. I build the boring-but-critical plumbing of the developer world — API specs, SDKs, and self-hosted infrastructure — and run most of it on hardware in my closet.',
	formerly: 'Formerly publishing as Luke Hagar.',
	links: {
		github: 'https://github.com/LukasParke',
		linkedin: 'https://www.linkedin.com/in/lukasparke/',
		devto: 'https://dev.to/lukeparke',
		blog: 'https://openapiguy.dev',
		bluesky: 'https://bsky.app/profile/lukehagar.com'
	},
	stack: ['Svelte', 'TypeScript', 'Go', 'Tailwind', 'OpenAPI', 'Docker', 'Coolify', 'Proxmox']
};

export type Status = 'online' | 'building' | 'archived';

export interface Project {
	name: string;
	description: string;
	url: string;
	tags: string[];
	status: Status;
	category: 'OpenAPI' | 'Plex' | 'Svelte' | 'GitHub';
}

export const projects: Project[] = [
	{
		name: 'plex-api-spec',
		description: 'A community-maintained OpenAPI specification for Plex Media Server.',
		url: 'https://github.com/LukasParke/plex-api-spec',
		tags: ['openapi', 'plex'],
		status: 'online',
		category: 'Plex'
	},
	{
		name: 'plexjs · plexpy · plexgo · +6',
		description: 'Plex Media Server SDKs generated for nine languages, from one spec.',
		url: 'https://github.com/LukasParke/plexjs',
		tags: ['sdk', 'typescript', 'go', 'python'],
		status: 'online',
		category: 'Plex'
	},
	{
		name: 'OpenAPI.gg',
		description: 'A visual OpenAPI design studio built with Svelte.',
		url: 'https://github.com/LukasParke/OpenAPI.gg',
		tags: ['openapi', 'svelte'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'Arbiter',
		description: 'An API proxy that documents your API as you use it.',
		url: 'https://github.com/LukasParke/arbiter',
		tags: ['openapi', 'proxy', 'go'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'Telescope',
		description: 'An OpenAPI language-server extension for VS Code and Cursor.',
		url: 'https://github.com/sailpoint-oss/telescope',
		tags: ['openapi', 'lsp', 'vscode'],
		status: 'online',
		category: 'OpenAPI'
	},
	{
		name: 'sveltekit-extension-template',
		description: 'Chrome extension template — SvelteKit, Svelte 5, Skeleton v3, Tailwind v4.',
		url: 'https://github.com/LukasParke/sveltekit-extension-template',
		tags: ['svelte', 'chrome', 'template'],
		status: 'online',
		category: 'Svelte'
	},
	{
		name: 'Sveltey',
		description: 'A SvelteKit SaaS starter template.',
		url: 'https://github.com/LukasParke/Sveltey',
		tags: ['svelte', 'saas', 'template'],
		status: 'online',
		category: 'Svelte'
	},
	{
		name: 'stats-action + remotion',
		description: 'GitHub Actions pipeline that renders animated profile stats as GIFs.',
		url: 'https://github.com/LukasParke/github-stats-remotion',
		tags: ['actions', 'remotion'],
		status: 'online',
		category: 'GitHub'
	}
];
