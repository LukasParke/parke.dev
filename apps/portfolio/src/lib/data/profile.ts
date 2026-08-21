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
	stack: ['Svelte', 'TypeScript', 'Go', 'Tailwind', 'OpenAPI', 'Docker', 'Kubernetes', 'Talos', 'Flux', 'Proxmox']
};

export type Status = 'online' | 'building' | 'archived';

export interface Project {
	name: string;
	description: string;
	url: string;
	tags: string[];
	status: Status;
	category: 'OpenAPI' | 'Plex' | 'Svelte' | 'GitHub' | 'Homelab' | 'AI' | 'SDKs' | 'Tools' | 'Research';
}

export const projects: Project[] = [
	// ---- Homelab ----
	{
		name: 'home-ops',
		description:
			'GitOps homelab: a Talos Kubernetes cluster fully declared in git and reconciled by Flux — networking, storage, observability, and every app on this site.',
		url: 'https://github.com/LukasParke/home-ops',
		tags: ['kubernetes', 'talos', 'flux'],
		status: 'online',
		category: 'Homelab'
	},
	{
		name: 'parke.dev',
		description:
			'This site and the blog — a Bun monorepo built into OCI images by CI and rolled out to the cluster automatically by Flux image automation.',
		url: 'https://github.com/LukasParke/parke.dev',
		tags: ['svelte', 'astro', 'gitops'],
		status: 'online',
		category: 'Homelab'
	},
	{
		name: 'hive',
		description:
			'Self-hosted deployment platform for Docker Swarm — a personal PaaS with docs and tagged releases.',
		url: 'https://github.com/LukasParke/hive',
		tags: ['docker', 'swarm', 'paas'],
		status: 'building',
		category: 'Homelab'
	},
	{
		name: 'swarm',
		description:
			'HA Docker Swarm configuration for the homelab — the cluster config that hive and friends run on.',
		url: 'https://github.com/LukasParke/swarm',
		tags: ['docker', 'swarm', 'config'],
		status: 'online',
		category: 'Homelab'
	},
	{
		name: 'capi',
		description:
			'HDMI-CEC control over HTTP and MQTT — a Rust service with full libcec bindings for driving AV gear from the network.',
		url: 'https://github.com/LukasParke/capi',
		tags: ['rust', 'cec', 'mqtt'],
		status: 'building',
		category: 'Homelab'
	},
	{
		name: 'pocketbase',
		description:
			'Community automation that keeps a Docker Hub pocketbase image perpetually up to date.',
		url: 'https://github.com/LukasParke/pocketbase',
		tags: ['docker', 'pocketbase', 'ci'],
		status: 'online',
		category: 'Homelab'
	},
	{
		name: 'paperclip-coolify',
		description:
			'Self-hosted Paperclip deployment for Coolify — built from source and published to ghcr.io for an authenticated public instance.',
		url: 'https://github.com/LukasParke/paperclip-coolify',
		tags: ['coolify', 'docker', 'ghcr'],
		status: 'online',
		category: 'Homelab'
	},

	// ---- OpenAPI ----
	{
		name: 'OpenAPI.gg',
		description:
			'A visual OpenAPI design studio built with Svelte — browser-based 3.1 editing with local-first storage.',
		url: 'https://github.com/LukasParke/OpenAPI.gg',
		tags: ['openapi', 'svelte'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'toasty',
		description:
			'A ref-first OpenAPI editor for the desktop — everything is a schema, everything is a reference, built to stay fast on huge multi-file specs.',
		url: 'https://github.com/LukasParke/toasty',
		tags: ['openapi', 'svelte', 'desktop'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'Arbiter',
		description: 'An API proxy that documents your API as you use it.',
		url: 'https://github.com/LukasParke/arbiter',
		tags: ['openapi', 'proxy', 'har'],
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
		name: 'suspect',
		description:
			'High-performance Rust toolkit for OpenAPI 3.x, Arazzo, and Overlay — lossless tree-sitter parsing, validation, and analysis.',
		url: 'https://github.com/LukasParke/suspect',
		tags: ['rust', 'tree-sitter', 'parser'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'navigator',
		description:
			'Uniform OpenAPI file handling for Go — parse, index, and resolve $refs across single-file and massively multi-file specs (Swagger 2.0–3.2).',
		url: 'https://github.com/LukasParke/navigator',
		tags: ['go', 'openapi', '$ref'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'varsity',
		description:
			'OpenAPI parsing, validation, analysis, reporting, and partitioning toolkit for TypeScript — usable as a library or a CLI.',
		url: 'https://github.com/LukasParke/varsity',
		tags: ['typescript', 'openapi', 'cli'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'charte.rs',
		description:
			'Rust CLI that crawls source code with tree-sitter and emits OpenAPI straight from the syntax trees — routes, shapes, and status codes without annotations.',
		url: 'https://github.com/LukasParke/charte.rs',
		tags: ['rust', 'tree-sitter', 'codegen'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'aperture',
		description:
			'VS Code extension providing schema-driven IntelliSense — hover, completions, validation, and custom lint rules for OpenAPI JSON/YAML.',
		url: 'https://github.com/LukasParke/aperture',
		tags: ['openapi', 'vscode', 'intellisense'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'tree-sitter-openapi',
		description:
			'Tree-sitter grammar parsing OpenAPI/Swagger 2.0 through 3.2 in YAML and JSON, with Markdown injection into description fields.',
		url: 'https://github.com/LukasParke/tree-sitter-openapi',
		tags: ['tree-sitter', 'grammar', 'c'],
		status: 'building',
		category: 'OpenAPI'
	},
	{
		name: 'openapi-types',
		description:
			'Comprehensive TypeScript definitions for every OpenAPI specification version, with detailed JSDoc and version-specific types.',
		url: 'https://github.com/LukasParke/openapi-types',
		tags: ['typescript', 'npm', 'types'],
		status: 'online',
		category: 'OpenAPI'
	},
	{
		name: 'prettier-plugin-openapi',
		description:
			'Prettier plugin that organizes OpenAPI/Swagger files for human readability — intelligent key sorting and modular multi-file support.',
		url: 'https://github.com/LukasParke/prettier-plugin-openapi',
		tags: ['prettier', 'openapi', 'npm'],
		status: 'online',
		category: 'OpenAPI'
	},
	{
		name: 'theschemagen',
		description: 'Generate OpenAPI schemas from JSON bodies and full HTTP responses.',
		url: 'https://github.com/LukasParke/theschemagen',
		tags: ['go', 'openapi', 'generator'],
		status: 'archived',
		category: 'OpenAPI'
	},
	{
		name: 'openapi-definition-generator',
		description:
			'Turn JSON API responses into OpenAPI definitions at the click of a button.',
		url: 'https://github.com/LukasParke/openapi-definition-generator',
		tags: ['openapi', 'web', 'generator'],
		status: 'archived',
		category: 'OpenAPI'
	},

	// ---- Plex ----
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
		name: 'plexapi.dev docs',
		description:
			'Four generations of open-source Plex API documentation — Docusaurus, Mintlify, VitePress, and generated SDK docs — powering plexapi.dev.',
		url: 'https://github.com/LukasParke/plex-mintlify-docs',
		tags: ['docs', 'docusaurus', 'mintlify'],
		status: 'online',
		category: 'Plex'
	},
	{
		name: 'Warden',
		description: 'A local/web desktop app for playing Plex music, built on Electron.',
		url: 'https://github.com/LukasParke/Warden',
		tags: ['plex', 'electron', 'music'],
		status: 'building',
		category: 'Plex'
	},
	{
		name: 'plexterraform',
		description: 'An open source Terraform provider for Plex Media Server.',
		url: 'https://github.com/LukasParke/plexterraform',
		tags: ['terraform', 'go', 'plex'],
		status: 'archived',
		category: 'Plex'
	},
	{
		name: 'plex-api-oauth',
		description:
			'npm module that makes Plex Media Server and plex.tv authentication easy in JavaScript and React projects.',
		url: 'https://github.com/LukasParke/plex-api-oauth',
		tags: ['npm', 'oauth', 'plex'],
		status: 'archived',
		category: 'Plex'
	},
	{
		name: 'plex-postman',
		description:
			'Postman collections for exercising the Plex Media Server API.',
		url: 'https://github.com/LukasParke/plex-postman',
		tags: ['postman', 'plex', 'api'],
		status: 'archived',
		category: 'Plex'
	},

	// ---- Svelte ----
	{
		name: 'Sveltey',
		description: 'A SvelteKit SaaS starter template.',
		url: 'https://github.com/LukasParke/Sveltey',
		tags: ['svelte', 'saas', 'template'],
		status: 'online',
		category: 'Svelte'
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
		name: 'sveltekit-adapters',
		description:
			'A collection of SvelteKit adapters for platforms like Appwrite, each with a runnable example implementation.',
		url: 'https://github.com/LukasParke/sveltekit-adapters',
		tags: ['sveltekit', 'adapters', 'examples'],
		status: 'building',
		category: 'Svelte'
	},
	{
		name: 'sveltekit-electron',
		description:
			'A full adapter-node SvelteKit application nested inside Electron for desktop use.',
		url: 'https://github.com/LukasParke/sveltekit-electron',
		tags: ['sveltekit', 'electron', 'desktop'],
		status: 'archived',
		category: 'Svelte'
	},

	// ---- GitHub ----
	{
		name: 'stats pipeline',
		description:
			'stats-action collects versioned profile stats into a public data repo; the diffler monorepo and Remotion render them as animated GIF cards for profile READMEs.',
		url: 'https://github.com/LukasParke/diffler',
		tags: ['actions', 'remotion', 'automation'],
		status: 'online',
		category: 'GitHub'
	},
	{
		name: 'stats-action',
		description:
			'A public-safe GitHub Action collecting versioned GitHub profile statistics for profile sites, Remotion pipelines, and README widgets.',
		url: 'https://github.com/LukasParke/stats-action',
		tags: ['actions', 'stats', 'ci'],
		status: 'online',
		category: 'GitHub'
	},
	{
		name: 'slinky',
		description:
			'A GitHub Action (and CLI) that slinks through your repository validating every external link.',
		url: 'https://github.com/LukasParke/slinky',
		tags: ['actions', 'go', 'links'],
		status: 'online',
		category: 'GitHub'
	},
	{
		name: 'usage-statistics',
		description:
			'GitHub Action tracking download statistics across npm, GitHub, PyPI, and PowerShell, generating charts and reports.',
		url: 'https://github.com/LukasParke/usage-statistics',
		tags: ['actions', 'analytics', 'charts'],
		status: 'online',
		category: 'GitHub'
	},
	{
		name: 'Awesome-GitHub-Profile',
		description:
			'A collection of favorite GitHub automation tools and profile tricks — the ideas behind this stats pipeline.',
		url: 'https://github.com/LukasParke/Awesome-GitHub-Profile',
		tags: ['automation', 'profile'],
		status: 'online',
		category: 'GitHub'
	},

	// ---- AI ----
	{
		name: 'gossip',
		description:
			'A Go framework for building production-quality LSP servers — code-generated protocol types, composable middleware, document management.',
		url: 'https://github.com/LukasParke/gossip',
		tags: ['go', 'lsp', 'framework'],
		status: 'building',
		category: 'AI'
	},
	{
		name: 'pi-extensions',
		description:
			'Monorepo of extensions for the pi coding agent, published as individual npm packages — install only what you want.',
		url: 'https://github.com/LukasParke/pi-extensions',
		tags: ['npm', 'agents', 'pi'],
		status: 'online',
		category: 'AI'
	},
	{
		name: 'pi-subagent',
		description:
			'Production-grade isolated subagents for Pi — delegate research, parallel exploration, and clean-context review to child agents.',
		url: 'https://github.com/LukasParke/pi-subagent',
		tags: ['agents', 'orchestration'],
		status: 'online',
		category: 'AI'
	},
	{
		name: 'wikillm-api',
		description:
			'A self-hostable knowledge base for humans and agents — point it at markdown and get hybrid search over your vault, repo, or wiki.',
		url: 'https://github.com/LukasParke/wikillm-api',
		tags: ['rust', 'search', 'wiki'],
		status: 'building',
		category: 'AI'
	},

	// ---- SDKs ----
	{
		name: 'Coolify · Dokploy · Prowlarr TS SDKs',
		description:
			'Developer-friendly, type-safe TypeScript SDKs for self-hosting platforms, generated and maintained from their OpenAPI specs.',
		url: 'https://github.com/LukasParke/Coolify-TypeScript-SDK',
		tags: ['typescript', 'sdk', 'speakeasy'],
		status: 'online',
		category: 'SDKs'
	},
	{
		name: 'discoursejs',
		description: 'TypeScript/JavaScript SDK for the Discourse API.',
		url: 'https://github.com/LukasParke/discoursejs',
		tags: ['typescript', 'sdk', 'discourse'],
		status: 'online',
		category: 'SDKs'
	},
	{
		name: 'yoto_api + yotocol',
		description:
			'Async Python wrapper for the Yoto API — control players, browse cards, react to live MQTT playback events — plus a bulk card-backup CLI.',
		url: 'https://github.com/LukasParke/yoto_api',
		tags: ['python', 'mqtt', 'sdk'],
		status: 'online',
		category: 'SDKs'
	},

	// ---- Tools ----
	{
		name: 'dfx',
		description:
			'Cross-platform CLI for inspecting, validating, and changing default apps — taming MIME types, URL schemes, and desktop entries.',
		url: 'https://github.com/LukasParke/dfx',
		tags: ['go', 'cli', 'linux'],
		status: 'building',
		category: 'Tools'
	},
	{
		name: 'pypistats.dev',
		description:
			'Open-source SvelteKit replacement for PyPI Stats — fast on-demand download analytics from BigQuery, backed by PostgreSQL and Redis, with a JSON API.',
		url: 'https://github.com/LukasParke/pypistats.dev',
		tags: ['sveltekit', 'analytics', 'bigquery'],
		status: 'online',
		category: 'Tools'
	},
	{
		name: 'archives-of-nethys-scraper',
		description: 'A simple tool to gather datasets from the Archives of Nethys (Pathfinder SRD).',
		url: 'https://github.com/LukasParke/archives-of-nethys-scraper',
		tags: ['scraper', 'typescript', 'datasets'],
		status: 'archived',
		category: 'Tools'
	},
	{
		name: 'omarchy-dream-theme',
		description: 'A calm, cool, and collected theme for Omarchy — installable in one command.',
		url: 'https://github.com/LukasParke/omarchy-dream-theme',
		tags: ['linux', 'hyprland', 'theme'],
		status: 'online',
		category: 'Tools'
	},
	{
		name: 'tmi',
		description: 'Terminal music interface.',
		url: 'https://github.com/LukasParke/tmi',
		tags: ['go', 'tui', 'music'],
		status: 'archived',
		category: 'Tools'
	},
	{
		name: 'volar-docs',
		description:
			'Practical, engineer-focused notes on the VolarJS language server — understand, extend, and debug it without spelunking through source.',
		url: 'https://github.com/LukasParke/volar-docs',
		tags: ['docs', 'vue', 'lsp'],
		status: 'building',
		category: 'Tools'
	},
	{
		name: 'scalar-cheatsheet',
		description:
			'A cheat sheet for YAML block scalars in OpenAPI fields — when to use each Scalar style.',
		url: 'https://github.com/LukasParke/scalar-cheatsheet',
		tags: ['yaml', 'openapi', 'reference'],
		status: 'online',
		category: 'Tools'
	},
	{
		name: 'http-ws-reference',
		description:
			'A reference mapping WebSocket close codes to their closest HTTP equivalents.',
		url: 'https://github.com/LukasParke/http-ws-reference',
		tags: ['websocket', 'http', 'reference'],
		status: 'online',
		category: 'Tools'
	},
	{
		name: 'SailPoint community tools',
		description:
			'Community-built IdentityNow tooling: the Anchor support Chrome extension, the VA-Log-Parser npm module, and the IDN admin console.',
		url: 'https://github.com/LukasParke/Anchor',
		tags: ['sailpoint', 'identity', 'extension'],
		status: 'archived',
		category: 'Tools'
	},

	// ---- Research ----
	{
		name: 'wave3-research',
		description:
			'Educational reverse-engineering of the Elgato Wave:3 USB audio protocol, plus a native Linux D-Bus control daemon.',
		url: 'https://github.com/LukasParke/wave3-research',
		tags: ['reverse-engineering', 'usb', 'dbus'],
		status: 'online',
		category: 'Research'
	},
	{
		name: 'yoto-fingerprint',
		description:
			'Reverse-engineered technical specification and toolkit for Yoto NFC cards — educational security research.',
		url: 'https://github.com/LukasParke/yoto-fingerprint',
		tags: ['nfc', 'research', 'python'],
		status: 'online',
		category: 'Research'
	}
];
